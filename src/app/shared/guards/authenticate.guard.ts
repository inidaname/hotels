import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private auth: AuthService,
    private router: Router,
    private jwt: JwtHelperService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (route.path === 'auth') {
      if (localStorage.getItem('token') !== null) {
        this.router.navigateByUrl('/home');
        return false;
      }
    }

    // if (localStorage.getItem('token') !== null) {
    //   if (this.jwt.decodeToken().userType === 'superadmin') {
    //     this.router.navigateByUrl('/home');
    //     return false;
    //   }
    //   if (this.jwt.decodeToken().userType === 'user') {
    //     this.router.navigateByUrl('/roomservice');
    //     return false;
    //   }

    //   if (this.jwt.decodeToken().userType === 'admin') {
    //     this.router.navigateByUrl('/admin');
    //     return false;
    //   }
    // }

    if (localStorage.getItem('token') === null && route.path !== 'auth') {
      this.router.navigateByUrl('/auth');
      return false;
    }

    return true;
  }
}
