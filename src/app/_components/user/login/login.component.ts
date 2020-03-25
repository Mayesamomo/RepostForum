import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { first } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { LoginPayload } from './loginPayload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  }

  loginForm: FormGroup;
  loginPayload: LoginPayload;
  isError: boolean;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router, ) {
    this.loginPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  //get f() { return this.loginForm.controls; }

  login() {
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginPayload).subscribe((result) => {
      console.log("we here");
      if (result) {
        this.isError = false;
        this.router.navigateByUrl('/');
      } else {
        this.isError = true;
      }
    }, (result) => {
      this.isError = true;
    })
  }
}
