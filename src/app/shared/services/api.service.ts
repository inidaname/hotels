import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserData, User } from '@shared/interface';
import { environment } from '@environments/environment';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserDataService } from './user-data.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private api: string = environment.api;
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private userData: UserDataService
  ) { }

  registerUser(userReg: User): Observable<UserData> {
    return this.http
      .post<UserData>(`${this.api}/create/user`, userReg)
      .pipe(map(user => {
        this.auth.setUser(user);
        return user;
      }), catchError(this.handleError));
  }

  loginUser(login: object): Observable<UserData> {
    return this.http
      .post<UserData>(`${this.api}/login`, login)
      .pipe(map(user => {
        this.auth.setUser(user);
        return user;
      }), catchError(this.handleError));
  }

  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null);
  // }

  getUserById(): Observable<UserData> {
    const id = localStorage.getItem('currentUser');
    return this.http
      .get<UserData>(`${this.api}/users/${id}`)
      .pipe(map(user => {
        this.userData.setUserData(user.data);
        return user;
      }), catchError(this.handleError));
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.error.message}`;
    }
    return throwError(err);
  }
}
