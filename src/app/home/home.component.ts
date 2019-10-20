import { Component, OnInit } from '@angular/core';
import { NavList } from '@shared/interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navList: NavList[] = [
    {
      link: 'dashboard',
      name: 'Dashboard'
    },
    {
      link: 'management',
      name: 'Management'
    },
    {
      link: 'accounting',
      name: 'Accounting'
    },
    {
      link: 'reports',
      name: 'Report'
    },
    {
      link: 'settings',
      name: 'Settings'
    },
    {
      link: 'logout',
      name: 'Logout'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
