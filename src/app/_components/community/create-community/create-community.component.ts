import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { PostService } from "src/app/_services/post.service";
import { AuthService } from "src/app/_services/auth.service";
import { Community } from "src/app/DTO/community";
import { CommunityService } from "src/app/_services/community.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-community",
  templateUrl: "./create-community.component.html",
  styleUrls: ["./create-community.component.css"],
})
export class CreateCommunityComponent implements OnInit {
  createCommunityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private communityService: CommunityService,
    private toastr: ToastrService
  ) {
    this.createCommunityForm = this.formBuilder.group({
      community_name: ["", Validators.required],
      community_desc: ["", Validators.required],
      user_id: localStorage.getItem("user_id"),
    });
  }

  ngOnInit(): void {}

  createCommunity(details) {
    this.communityService.createCommunity(details).subscribe(
      (data) => {
        this.router.navigateByUrl("/");
        this.toastr.success("Community created successfully!");
      },
      (error) => {
        console.log("error " + error);
        console.log(details);
      }
    );
  }
}
