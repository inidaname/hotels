import { Component, OnInit } from '@angular/core';
import { User } from '@shared/interface';
import { AuthService } from '@shared/services/auth.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from './match';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  private registerUser() {
    console.log('Yes you are')
    if (this.registerForm.valid) {
      return this.auth.registerUser(this.registerForm.value).subscribe(
        (result: User) => (result),
        (error) => error
      );
    }
  }
  get f() { return this.registerForm.controls; }
}
