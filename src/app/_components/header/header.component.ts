import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/DTO/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  constructor(private router: Router,
    private authService: UserService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }
  gotoProfile() {
    this.router.navigateByUrl('/user/' + this.currentUser);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
