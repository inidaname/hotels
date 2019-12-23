import { Component, OnInit } from '@angular/core';
import { NavList } from '@shared/interface';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  navList: NavList[] = [
    {
      name: 'Rooms',
      link: './rooms'
    },
    {
      name: 'Restaurant',
      link: './restaurant'
    },
    {
      name: 'Stock',
      link: './stock'
    },
    {
      name: 'Staff',
      link: './staff'
    },
    {
      name: 'Account',
      link: './account'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
