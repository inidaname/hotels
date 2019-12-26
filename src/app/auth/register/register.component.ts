import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { ShareService } from '../../shared/services/share.service';
import { MustMatch } from './match';
import { Router } from '@angular/router';
import { UserDataService } from '../../shared/services/user-data.service';

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
    private share: ShareService,
    private router: Router,
    private data: UserDataService
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
        this.data.setUserData(val.data);
        this.router.navigateByUrl('/home');
      },
      err => {
        this.share.changeValueOfStatus(false);
        this.alertType = 'danger';
        this.message = err.error.message;
      }
    );
    console.log('Registered');
  }

  close() {
    this.message = null;
  }
}
