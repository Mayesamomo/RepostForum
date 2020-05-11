import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/DTO/post';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';
import { CommunityService } from 'src/app/_services/community.service';
import { Community } from 'src/app/DTO/community';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;
  posts: Post[];
  communities: Community[];
  displayViewAll: Boolean;
  user_name: string;
  constructor(private postService: PostService, private router: Router,private _sanitizer: DomSanitizer) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    })
  }

  ngOnInit() {
    this.postService.getReportedPosts().subscribe(post => {
      this.posts = post;
      let mySrc = this._sanitizer.bypassSecurityTrustUrl(this.posts[7].file_path);
      console.log(mySrc);
      this.user_name=localStorage.getItem("user_name")
      console.log("pqjwoijqioj")
      console.log(this.posts);
    })
  }

  deletePost(postId){
    this.postService.deletePost(postId).subscribe(data => {
      console.log(data);
    })
  }

}
