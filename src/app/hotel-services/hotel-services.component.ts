import { Component, OnInit } from '@angular/core';
import { NavList } from '@shared/interface';

@Component({
  selector: 'app-hotel-services',
  templateUrl: './hotel-services.component.html',
  styleUrls: ['./hotel-services.component.scss']
})
export class HotelServicesComponent implements OnInit {

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
  ];

  constructor() { }

  ngOnInit() {
  }

}
