import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Post } from "src/app/DTO/post";
import { Comment } from "src/app/DTO/comment";
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from "src/app/_services/post.service";
import { AuthService } from "src/app/_services/auth.service";
import { User } from "src/app/DTO/user";
import { CommentPayload } from "./commentPayload";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-view-post",
  templateUrl: "./view-post.component.html",
  styleUrls: ["./view-post.component.css"],
})
export class ViewPostComponent implements OnInit {
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  postId: Number;
  posts: Post[];
  comments: Comment[];
  user_name: String;
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.postId = this.route.snapshot.params["id"];
    console.log(this.postId);
    this.user_name = localStorage.getItem("user_name");

    this.commentForm = this.formBuilder.group({
      comment_Name: ["", Validators.required],
      post_id: this.postId,
      user_id: localStorage.getItem("user_id"),
    });
  }

  ngOnInit() {
    this.postService.getPostComments(this.postId).subscribe((comment) => {
      this.comments = comment;
      console.log(this.comments);
      console.log("testing");
    });

    this.postService.getPostById(this.postId).subscribe((post) => {
      this.posts = post;
      console.log(this.posts);
    });
  }

  postComment(details) {
    this.postService.postComment(details).subscribe(
      (data) => {
        this.router.navigateByUrl("/view-post/" + this.postId);
        console.log(data);
        console.log(details);
        this.toastr.success("comment submitted!");
        window.location.reload();
      },
      (error) => {
        console.log("Response Failed");
      }
    );
  }

  /*
    goToCommunity(){
      this.router.navigateByUrl("view-community/:id");
    }
  */
}
