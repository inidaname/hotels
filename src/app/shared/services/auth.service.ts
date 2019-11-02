import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '@shared/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public setUser(user: UserData): boolean {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', user.token);
    this.currentUserSubject.next(user.token);
    return true;
  }

  public clearUser(): boolean {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    return true;
  }

  public getUser() {
    return this.currentUserSubject.value;
  }
}
