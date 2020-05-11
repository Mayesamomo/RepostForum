import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/_services/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerCheck: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    this.registerForm = this.formBuilder.group({
      fullName: ["", Validators.required],
      user_name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  onSubmit(details) {
    this.userService.register(details).subscribe((data) => {
      this.registerCheck = data;
      console.log(details);
      if (this.registerCheck) {
        this.router.navigate(["/login"]);
        this.toastr.success("Registered Successfully!");
      } else {
        this.toastr.error("email or username already exist!");
      }
    });
  }
}
