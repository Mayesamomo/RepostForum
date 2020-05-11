import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../DTO/post';
import { CreatePostPayload } from '../_components/posts/create-post/createPostPayLoad';
import { CommentPayload } from '../_components/posts/view-post/commentPayload';
import {Comment} from 'src/app/DTO/comment';

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

  postUrl: string = 'http://localhost:8080/repostitRestServer/webresources/post';
  commentUrl: string = 'http://localhost:8080/WebApp/webresources/Comment';
  constructor(private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/repostitRestServer/webresources/post/getPosts',this.httpOptions);
  }

  getReportedPosts() : Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:8080/repostitRestServer/webresources/post/getReportedPosts",this.httpOptions);
  }

  createPost(postPayload: CreatePostPayload,filePath: string): Observable<any> {
    postPayload.file_path=filePath;
    console.log(postPayload.file_path);
    let reg ='http://localhost:8080/repostitRestServer/webresources/post/makePost'
    let jsonStr = JSON.stringify(postPayload);
    console.log(jsonStr);
    return this.http.post<any>(reg, jsonStr).pipe(map(post => {
      console.log(post);
    }));
  }

  getPostById(postId): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/repostitRestServer/webresources/post/getPostId/' + postId,this.httpOptions);
  }

  getPostByUser(user_id): Observable<Post[]>{
   return this.http.get<Post[]>('http://localhost:8080/repostitRestServer/webresources/post/getUserPosts/' + user_id);

  }

  getPostComments(postId): Observable<Comment[]> {
    console.log(postId);
    return this.http.get<Comment[]>('http://localhost:8080/repostitRestServer/webresources/comment/getPostComment/' + postId,this.httpOptions);

  }

  getVotes(postId): Observable<number>{
    return this.http.get<number>('http://localhost:8080/repostitRestServer/webresources/post/getPostLikes/'+postId,this.httpOptions)
  }

  addvote(postId,userId,likeValue): Observable<any>{
    return this.http.get<Observable<any>>('http://localhost:8080/repostitRestServer/webresources/post/addLike/' +postId + "/" + userId + "/" +likeValue,this.httpOptions)
  }

  postComment(commentPayload: CommentPayload): Observable<any> {

    let reg ='http://localhost:8080/repostitRestServer/webresources/comment/CreateComment'
    let jsonStr = JSON.stringify(commentPayload);
    return this.http.post<any>(reg, jsonStr).pipe(map(comment => {
      console.log(comment);
    }));
  }



  getPostByCommName(commName: string): Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:8080/repostitRestServer/webresources/post/getPostsByCommName/" + commName,this.httpOptions)
  }


  deletePost(postId) {
    return this.http.get<any>("http://localhost:8080/repostitRestServer/webresources/post/removePost/" + postId + "/" + 1);
  }


  getCommentByUserId(userId: Number) {
    console.log("userId: " + userId);
    let url = this.commentUrl + "/commentsOfUser/" + userId;
    console.log(url);
    return this.http.get<Comment[]>(url);

  }
  getCommentByPostId(postId: Number) {
    return this.http.get<Comment[]>("http://localhost:8080/repostitRestServer/webresources/comment/getPostComment/"+postId,this.httpOptions);

  }

  getAllComments(postId: Number): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://localhost:8080/WebApp/webresources/Comment/commentsOfPost/' + postId);
  }

  getAllPostsByCommunity(communityId: String): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:8080/repostitRestServer/webresources/post/getCommunityPosts/' + communityId,this.httpOptions);
  }
  getAllCommentsByUser(commentId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>('http://localhost:8080/WebApp/webresources/Comment/commentsOfUser/' + commentId);
  }
}
