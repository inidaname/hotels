import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { NavList } from '@shared/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navList: NavList[] = [
    {
      name: 'Rooms',
      link: 'rooms'
    },
    {
      name: 'Accounts',
      link: 'accounts'
    },
    {
      name: 'Staff',
      link: 'staff'
    },
    {
      name: 'Stocks',
      link: 'stock'
    },
    {
      name: 'Setting',
      link: './setting'
    }
  ];

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.api.getUserById().subscribe(user => {
        return user;
      });
    }
  }
}
