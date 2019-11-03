import { Component, OnInit } from '@angular/core';
import { UserDataService } from '@services/user-data.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullName: string;
  email: string;

  constructor(
    private data: UserDataService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.data.currentUser.subscribe(er => {
      this.fullName = er.fullName;
    });
  }

  userLogout(): void {
    const logout = this.auth.clearUser();

    if (logout.valueOf) {
      console.log(localStorage);
    }
  }
}
