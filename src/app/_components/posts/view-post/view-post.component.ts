import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Post } from 'src/app/DTO/post';
import { Comment } from 'src/app/DTO/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/DTO/user';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  currentUser: User;
  postId: number;
  userId: number;
  Validatecomment: any;
  commentForm: FormGroup;
  commentPayload: Comment;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  post: Post;
  comments: Comment[];
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.commentForm = this.formBuilder.group({
      commentDesc: ['', Validators.required],
      postId: this.route.snapshot.params['postId']
    });
    this.postId = this.route.snapshot.params['postId'];
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
    if (this.authService.currentUserValue !== null) {
      this.currentUser = this.authService.currentUserValue;
      this.userId = this.currentUser.userId;
    }

  }

  postComment() {
    this.commentForm.get('postDesc').value;
    this.postService.postComment(this.Validatecomment).subscribe(data => {
      this.commentForm.get('postDesc').setValue('');
      this.router.navigateByUrl('/view-post/' + this.postId);
    }, error => {
      console.log("Response Failed");
    })
  }

  private getCommentsForPost() {
    this.postService.getCommentByPostId(this.postId).subscribe(comments => {
      // this.comments = comments;
    }, error => {
      console.log("Failure " + error);
    });
  }

}
