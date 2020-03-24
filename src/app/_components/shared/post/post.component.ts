import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/DTO/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPost(id: Number) {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
