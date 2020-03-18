import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { UserType } from '../DTO/user-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private router: Router;
  private authService: UserService

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      // user is authorised, return true
      return true;
    }

    // user not logged? redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }
  isAdmin(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser.userType == UserType.Admin) {
      // authorised so return true
      return true;
    }
  }
}
