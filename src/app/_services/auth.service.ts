import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../DTO/user';
import { LoginPayload } from '../_components/user/login/loginPayload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() loggedIn: EventEmitter<Boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/plain'
    })
  };
  //isLoggedIn: boolean;
  users: User;
  Apiurl: string = "http://localhost:8080/WebApp/webresources/User";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.http.post<any>('http://localhost:8080/WebApp/webresources/User/login', loginPayload, this.httpOptions).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(this.users);
      this.loggedIn.emit(true);
      this.username.emit(data.username);
      return data;
    }));
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  isLoggedIn() {
    this.loggedIn.emit(false);
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
