import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../DTO/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/plain'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl: string = 'http://localhost:8080/WebApp/webresources/Post';
  commentUrl: string = 'http://localhost:8080/WebApp/webresources/Comment';

  posts: Post[] = [];

  constructor(private http: HttpClient,
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl + "/GetAllPost");
  }

  CreatePost(details: Post) {
    let jsonStr = JSON.stringify(details);
    return this.http.post<any>(this.postUrl, jsonStr);
  };




  getPostById(postId) {
    let url = this.postUrl + "/singlePost/" + postId;
    return this.http.get<Post[]>(url);
  }

  getCommentsOfPost(postId) {
    let url = this.commentUrl + '/commentsOfPost/' + postId;
    return this.http.get<Comment[]>(url);
  }

  postComment(details) {
    let jsonStr = JSON.stringify(details);
    return this.http.post<any>(this.commentUrl, jsonStr);
  }


  deletePost(postId) {
    console.log("POST ID: " + postId);
    let url = this.postUrl + "/deletePost/" + postId;
    console.log(url);
    return this.http.put(url, this.posts);

  }

  getCommentByUserId(userId: Number) {
    console.log("userId: " + userId);
    let url = this.commentUrl + "/commentsOfUser/" + userId;
    console.log(url);
    return this.http.get<Comment[]>(url);

  }
  getCommentByPostId(postId: Number) {
    console.log("Post Id: " + postId);
    let url = this.commentUrl + "t/commentsOfPost/" + postId;
    console.log(url);
    return this.http.get<Comment[]>(url);

  }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl);
  }

}
