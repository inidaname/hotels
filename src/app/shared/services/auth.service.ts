import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@shared/interface';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string = environment.api;
  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.api, user)
      .pipe(tap(), catchError(this.handleError));
  }

  loginUser(login: object): Observable<User> {
    return this.http
      .post<User>(this.api, login)
      .pipe(tap(), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}
