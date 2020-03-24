import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/DTO/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService, private router: Router) {

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(post => {
      this.posts = post;
    })
  }

}
