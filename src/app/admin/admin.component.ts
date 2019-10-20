import { Component, OnInit } from '@angular/core';
import { NavList } from '@shared/interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
      link: 'stocks',
      name: 'Stocks and Services'
    },
    {
      link: 'rooms',
      name: 'Room Services'
    },
    {
      link: 'report',
      name: 'Report and Account'
    },
    {
      link: 'setting',
      name: 'Setting'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
