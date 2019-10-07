import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@shared/interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api: string = environment.api;
  constructor(private http: HttpClient) { }

  registerUser(): Observable<User> {
    const obs = this.http.post();
    return obs;
  }
}
