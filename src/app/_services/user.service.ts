import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../DTO/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  isLoggedIn: boolean;
  constructor(private http: HttpClient,private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  };

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  Apiurl: string = "http://localhost:8080/repostitRestServer/webresources/User";

  register(details) {
    let reg = this.Apiurl + "/Register"
    let jsonStr = JSON.stringify(details);
    console.log(jsonStr);
    return this.http.post<any>(reg, jsonStr).pipe(map(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  login(user_name: String, password: String) {
    return this.http.post<any>(this.Apiurl + "/Login", { user_name, password }, this.httpOptions)
      .pipe(map(user => {
        if (user) {
          // store user details in local storage to keep user logged in
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          this.isLoggedIn = true;
        }
        console.log(JSON.stringify(user));
        return user;
      }));
  }
  editUserDetails(details) {
    let reg = this.Apiurl + "/editUser"
    let jsonStr = JSON.stringify(details);
    return this.http.post<any>(reg, jsonStr).pipe(map(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(null);
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  /** logout() {
     // remove user from session storage and set current user to null
     sessionStorage.removeItem('currentUser');
     this.currentUserSubject.next(null);
     this.isLoggedIn = false;
   }
   userIsLoggedIn() {
     console.log("Userservice.IsLoggedIn", this.isLoggedIn);
     return this.isLoggedIn;
   }**/
}
