import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginDetails: any;
  isError: boolean;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router, ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(details) {
    this.userService.login(details).subscribe(data => {
      console.log(data)
      if (data) {
        console.log(data)
        this.router.navigate(['/']);
        this.isError = false;
        console.log(this.isError);
      } else {
        this.isError = true;
      }
    },
      () => {
        this.isError = true;
      }
    );
  }
}
