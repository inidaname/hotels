import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userFullname: any;

  constructor(
    private jwt: JwtHelperService
  ) { }

  ngOnInit() {
    this.userFullname = this.jwt.decodeToken().userId;
  }

}
