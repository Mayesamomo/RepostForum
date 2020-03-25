import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/DTO/post';
import { Comment } from 'src/app/DTO/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/DTO/user';
import { CommentPayload } from './commentPayload';
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
  postId: Number;
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
      commentDesc: ['', Validators.required],

    });
    this.postId = this.route.snapshot.params['postId']
    this.commentPayload = {
      commentDesc: '',
      postId: this.route.snapshot.params['postId']
    }
    this.getCommentsForPost();
  }

  ngOnInit() {
    this.postService.getPostById(this.postId).subscribe(() => {
      return data => {
        this.post = data;
      };
    }, error => {
      console.log('Failure ' + error);
    });


  }

  postComment() {
    this.postService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('commentDesc').setValue('');
      this.router.navigateByUrl('/view-post/' + this.postId);
    }, error => {
      console.log("Response Failed");
    })
  }

  private getCommentsForPost() {
    this.postService.getCommentByPostId(this.postId).subscribe(map => comments => {
      this.comments = comments;
    }, error => {
      console.log("Failure " + error);
    });
  }

}
