import { Component, OnInit } from '@angular/core';
import { UserDataService } from '@services/user-data.service';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private data: UserDataService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.api.getUserById().subscribe(user => {
        return user;
      });
    }
  }
}
