import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/DTO/user";
import { UserService } from "src/app/_services/user.service";
import { AuthService } from "src/app/_services/auth.service";
import { PostService } from "src/app/_services/post.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { stringify } from "querystring";
import { ToastrService } from "ngx-toastr";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  currentUser: User;
  url: string;
  searchCommunityForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private postService: PostService,
    private toastr: ToastrService
  ) {
    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
    this.searchCommunityForm = this.formBuilder.group({
      commTitle: ["", Validators.required],
    });
  }
  user_name: string;
  user_type: number;
  adminCheck: boolean = false;

  ngOnInit(): void {
    this.user_name = localStorage.getItem("user_name");
    this.user_type = parseInt(localStorage.getItem("user_type"));
    if (this.user_type == 1) {
      this.adminCheck = true;
    }
  }
  gotoProfile() {
    this.router.navigateByUrl("/user/" + this.currentUser);
  }
  logout() {
    this.authService.logout();
    //this.router.navigateByUrl("/");
    this.toastr.success("Logged out successfully!");
    window.location.reload();
  }

  searchCommunity(commTitle) {
    this.url =
      "/view-community/" + this.searchCommunityForm.controls["commTitle"].value;
    console.log(this.url);
    this.router.navigateByUrl(this.url);
  }
}
