import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { LoginPayload } from "./loginPayload";
import { UserService } from "src/app/_services/user.service";
import { User } from "src/app/DTO/user";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "text/plain",
    }),
  };

  loginForm: FormGroup;
  loginPayload: LoginPayload;
  isError: boolean;
  user: User[] = [];
  pass: boolean;
  userN: string;
  userId: number;
  userType: number;
  fullName: string;
  email: string;
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.loginPayload = {
      user_name: "",
      password: "",
    };
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user_name: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login() {
    this.loginPayload.user_name = this.loginForm.get("user_name").value;
    this.loginPayload.password = this.loginForm.get("password").value;
    this.UserService.login(
      this.loginPayload.user_name,
      this.loginPayload.password
    ).subscribe(
      (data) => {
        this.user = data;
        this.pass = data[0].password;
        this.userN = data[0].user_name;
        this.fullName = data[0].fullName;
        this.userId = data[0].user_id;
        this.userType = data[0].type_id;
        console.log(this.userType);
        localStorage.setItem("user_id", this.userId.toString());
        localStorage.setItem("user_name", this.userN);
        localStorage.setItem("user_type", this.userType.toString());
        if ((this.pass = true)) {
          this.isError = false;
          this.router.navigateByUrl("/home");
          this.toastr.success("Welcome Back !");
        } else if ((this.pass = false)) {
          this.isError = true;
          this.toastr.error("invalid credentials!");
        }
      },
      () => {
        this.isError = true;
      }
    );
  }
}
