import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullName: string;
  email: string;
  status = false;
  @Input() userPlace?: string;

  constructor(
    private data: UserDataService,
    private auth: AuthService,
    private router: Router,
    private jwt: JwtHelperService
  ) { }

  ngOnInit() {
    this.userPlace = this.jwt.decodeToken().userType;
    this.data.currentUser.subscribe(er => {
      if (er !== null) {
        this.status = true;
        this.fullName = er.fullName;
      }
    });
  }

  userLogout(): void {
    const logout = this.auth.clearUser();

    if (logout.valueOf) {
      this.router.navigateByUrl('/auth');
    }
  }
}
