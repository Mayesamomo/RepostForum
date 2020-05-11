import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/DTO/post";
import { Router } from "@angular/router";
import {
  faArrowUp,
  faArrowDown,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { PostService } from "src/app/_services/post.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;
  posts: Post[];
  displayViewAll: Boolean;
  user_name: string;
  constructor(
    private postService: PostService,
    private router: Router,
    private _sanitizer: DomSanitizer
  ) {
    this.postService.getAllPosts().subscribe((post) => {
      this.posts = post;
    });
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((post) => {
      this.posts = post;
      let mySrc = this._sanitizer.bypassSecurityTrustUrl(
        this.posts[7].file_path
      );
      console.log(mySrc);
      this.user_name = localStorage.getItem("user_name");
      console.log(this.posts);
    });
  }

  goToCommunity() {
    this.router.navigateByUrl("view-community/:id");
  }
}
