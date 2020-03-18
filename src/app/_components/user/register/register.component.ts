import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  registerCheck: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(details) {
    this.userService.register(details).subscribe(data => {
      //console.log("First Print: " + data)
      this.registerCheck = data;
      if (this.registerCheck) {
        this.router.navigate(['/login']);
      } else {
        alert('Username or email already in use.')
      }
    });
  }
}
