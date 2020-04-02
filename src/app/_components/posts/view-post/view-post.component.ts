import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/DTO/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';
import { CommentPayload } from './commentPayload';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  commentCheck;
  postId;
  userId: number;
  currentUser;

  post: Post;
  comments: CommentPayload[];
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.commentForm = this.formBuilder.group({
      userId: '',
      postId: '',
      commentDesc: ['', Validators.required],
    });
    //routing to the post with it's id
    //this.postId = this.route.snapshot.params['postId']
    //this.commentPayload = {
    //commentDesc: '',
    // postId: this.route.snapshot.params['postId']
    //}
    //this.getCommentsForPost();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('postId');

      let postId = params.get('postId');
      this.postService.getPostById(postId).subscribe(posts => {
        this.post = posts;
      });
      this.postService.getAllComments(post_id).subscribe(comments => {
        this.comments = comments;
      });
    });
    //this.postService.getPostById(this.postId).subscribe(data => {
    // this.post = data;
    // console.log(this.post)
    //}, error => {
    // console.log('Failure ' + error);
    //});
    if (this.authService.currentUserValue !== null) {
      this.currentUser = this.authService.currentUserValue;
      this.userId = this.currentUser.userId;
    }
  }

  postComment() {
    this.commentPayload.commentDesc = this.commentForm.get('commentDesc').value;
    this.postService.postComment(this.commentPayload).subscribe(() => {
      this.commentForm.get('commentDesc').setValue('');
      this.router.navigateByUrl('/view-post/' + this.postId);
    }, () => {
      console.log("Response Failed");
    })
  }

  //private getCommentsForPost() {
  //this.postService.getAllComments(this.postId).subscribe(comments => {
  // this.comments = comments;
  //}, error => {
  //  console.log("Failure " + error);
  //});
  //}

}
