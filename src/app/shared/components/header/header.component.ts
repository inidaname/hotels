import { Component, OnInit } from '@angular/core';
import { UserDataService } from '@services/user-data.service';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullName: string;
  email: string;
  status = false;

  constructor(
    private data: UserDataService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
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
