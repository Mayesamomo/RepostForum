import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { PostService } from "src/app/_services/post.service";
import { AuthService } from "src/app/_services/auth.service";
import { Community } from "src/app/DTO/community";
import { CommunityService } from "src/app/_services/community.service";
import { Post } from "src/app/DTO/post";
import { CreatePostPayload } from "./createPostPayLoad";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"],
})
export class CreatePostComponent implements OnInit {
  communities: Community[];
  postPayload: CreatePostPayload;
  createPostForm: FormGroup;
  postCheck;
  userId: number;
  fileToUpload: File = null;
  currentUser = this.authService.currentUserValue;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private communityService: CommunityService,
    private postService: PostService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.createPostForm = this.formBuilder.group({
      post_title: ["", Validators.required],
      post_description: ["", Validators.required],
      user_id: localStorage.getItem("user_id"),
      community: ["", Validators.required],
      file_path: "",
    });
  }
  ngOnInit() {
    this.communityService.getAllCommunity().subscribe(
      (data) => {
        this.communities = data;
      },
      (error) => {
        console.log("Error : " + error);
      }
    );
  }

  createPost(details) {
    console.log(details);
    //console.log("i'm here");
    this.postService
      .createPost(details, sessionStorage.getItem("base64"))
      .subscribe(
        (data) => {
          this.router.navigateByUrl("/");
          this.toastr.success("post created successfully!");
        },
        (error) => {
          console.log("error " + error);
          console.log(details);
        }
      );
  }

  discardPost() {
    this.router.navigateByUrl("/");
  }

  getBase64(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      localStorage.setItem("base64", reader.result.toString());
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
}
