import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { PostService } from 'src/app/_services/post.service';
import { Post } from 'src/app/DTO/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  posts: Post[];
  user_id: number;
  constructor( private postService: PostService,) { 
    this.user_id=parseInt(localStorage.getItem("user_id"))
  }
  name:string;
  ngOnInit(): void {
    this.name=localStorage.getItem("user_name");
    this.postService.getPostByUser(this.user_id).subscribe(post => {
      this.posts = post;
      console.log(this.posts);
    })
  }

}
