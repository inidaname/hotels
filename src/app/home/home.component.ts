import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { UserDataService } from '@services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private api: ApiService,
    private data: UserDataService,
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.api.getUserById().subscribe(user => {
        return user;
      });
    }
  }
}
