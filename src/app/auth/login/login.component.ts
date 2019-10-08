import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '@shared/interface';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }

  private loginUser() {
    if (this.loginForm.valid) {
      return this.auth.loginUser(this.loginForm.value)
        .subscribe(
          (result) => this.user = result,
          (err) => err
        );
    }
  }

  get f() { return this.loginForm.controls; }

}
