import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToCreatePost() {
    this.router.navigateByUrl("/create-post");
  }

  goToCreateSubreddit() {
    this.router.navigateByUrl("/create-community");
  }
}
