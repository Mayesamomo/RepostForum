import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  userId: number;
  currentUser;
  deleteCommentForm;
  commentID;
  deletecheck;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private postService: PostService) { }

  ngOnInit(): void {
  }

}
