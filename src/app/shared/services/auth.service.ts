import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData, User } from '@shared/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // User data shared
  private currentToken: BehaviorSubject<string>;
  public getToken: Observable<string>;

  constructor() {
    // User data kick start
    this.currentToken = new BehaviorSubject<string>(localStorage.getItem('token'));
    this.getToken = this.currentToken.asObservable();
  }

  public setUser(user: UserData): boolean {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('token', user.token);
    localStorage.setItem('currentUser', user.data._id);
    this.currentToken.next(user.token);
    return true;
  }

  public clearUser(): boolean {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentToken.next(null);
    return true;
  }

  public getData() {
    return this.currentToken.value;
  }
}
