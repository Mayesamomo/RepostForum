import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../DTO/post';
import { CreatePostPayload } from '../_components/posts/create-post/createPostPayLoad';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  }

  postUrl: string = 'http://localhost:8080/WebApp/webresources/Post';
  commentUrl: string = 'http://localhost:8080/WebApp/webresources/Comment';
  constructor(private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/WebApp/webresources/Post/GetAllPost');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post('http://localhost:8080/WebApp/webresources/Post', postPayload);
  }

  getPostById(postId: Number): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/WebApp/webresources/Post/singlePost/{postId}' + postId);
  }

  getPostComments(postId: number): Observable<Comment[]> {

    return this.http.get<Comment[]>('http://localhost:8080/WebApp/webresources/Comment/commentsOfPost/' + postId);
  }

  postComment(commentPayload: Comment): Observable<any> {
    return this.http.post<any>('http://localhost:8080/WebApp/webresources/Comment', commentPayload);
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

  getAllComments(postId: Number): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://localhost:8080/WebApp/webresources/Comment/commentsOfPost/' + postId);
  }

  getAllPostsByCommunity(communityId: Number): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/WebApp/webresources/Post/getPostByCommunityId/' + communityId);
  }
  getAllCommentsByUser(commentId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://localhost:8080/WebApp/webresources/Comment/commentsOfUser/' + commentId);
  }
}
