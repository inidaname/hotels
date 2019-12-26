import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public currentUser: Observable<User> = this.currentUserSubject.asObservable();

  constructor() { }

  public setUserData(user: User) {
    return this.currentUserSubject.next(user);
  }

  public clearData() {
    return this.currentUserSubject.next(null);
  }

}
