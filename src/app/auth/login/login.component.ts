import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@services/api.service';
import { ShareService } from '@services/share.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  message: string;
  alertType: string;
  alert: boolean;

  constructor(
    private fb: FormBuilder,
    private share: ShareService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.alert = true;
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.login.controls; }

  loginUser() {
    this.share.changeValueOfStatus(true);
    this.api.loginUser(this.login.value).subscribe(val => {
      this.message = val.message;
      this.alertType = 'success';
      this.share.changeValueOfStatus(false);
    }, err => {
      console.log(err)
      this.share.changeValueOfStatus(false)
      this.message = err.message;
      this.alertType = 'danger';
    });
  }

  close() {
    this.alert = false;
    this.message = null;
  }

}
