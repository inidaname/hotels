import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@services/api.service';
import { ShareService } from '@services/share.service';
import { MustMatch } from './match';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  message: string;
  alertType: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private share: ShareService
  ) { }

  ngOnInit() {
    // Compare two passwords
    this.register = this.fb.group({
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      username: ['']
    });
  }

  get f() { return this.register.controls; }

  registerUser() {
    this.share.changeValueOfStatus(true);
    this.apiService.registerUser(this.register.value).subscribe(
      val => {
        this.share.changeValueOfStatus(false);
        this.alertType = 'success';
        this.message = val.message;
      },
      err => {
        this.share.changeValueOfStatus(false);
        this.alertType = 'danger';
        this.message = err.message;
      }
    );
    console.log('Registered');
  }

  close() {
    this.message = null;
  }
}
