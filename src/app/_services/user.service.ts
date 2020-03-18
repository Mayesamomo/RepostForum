import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../DTO/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  Apiurl: string = "http://localhost:8080/WebApp/webresources/User";

  register(details) {
    let reg = this.Apiurl + "/register"
    let jsonStr = JSON.stringify(details);
    console.log(jsonStr);
    return this.http.post<any>(reg, jsonStr).pipe(map(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  login(details) {
    let reg = this.Apiurl + "/login"
    let jsonStr = JSON.stringify(details);
    console.log(jsonStr);
    return this.http.post<User>(reg, jsonStr).pipe(map(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);

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

  logout() {
    // remove user from session storage and set current user to null
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
