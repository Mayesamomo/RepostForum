import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/DTO/post';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons';
import { CommunityService } from 'src/app/_services/community.service';
import { Community } from 'src/app/DTO/community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;
  posts: Post[];
  communities: Community[];
  displayViewAll: Boolean;
  user_name: string;
  constructor(private postService: PostService, private router: Router,private CommunityService: CommunityService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    })
  }

  ngOnInit(): void {
  
  }

}
