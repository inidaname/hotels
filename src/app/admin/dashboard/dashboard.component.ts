import { Component, OnInit } from '@angular/core';
import { faUtensils, faBed, faMoneyCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  highLights: any[] = [
    {
      icon: faUtensils,
      heading: `Restaurants Served`
    },
    {
      icon: faBed,
      heading: `Rooms Lodged`
    },
    {
      icon: faBed,
      heading: `Hotel Services`
    },
    {
      icon: faMoneyCheck,
      heading: `Expenses Incurred`
    },
    {
      icon: faDollarSign,
      heading: `Total Earned`
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
