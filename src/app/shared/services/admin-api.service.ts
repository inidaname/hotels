import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  private api: string = environment.api;
  private headersOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: `${localStorage.getItem('token')}`
    })
  };


  constructor(
    private http: HttpClient
  ) { }

  getAccounts() {
    return this.http
      .get(`${this.api}/account/sales`)
      .pipe(map((sales: any) => sales.data), catchError(this.handleError));
  }

  getRestaurant() {
    return this.http
      .get(`${this.api}/account/restaurant`)
      .pipe(map((meals: any) => meals.data), catchError(this.handleError));
  }

  getRooms() {
    return this.http
      .get(`${this.api}/account/rooms`)
      .pipe(map((rooms: any) => rooms.data), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.error.message}`;
    }
    return throwError(err);
  }
}
