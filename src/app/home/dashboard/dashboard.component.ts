import { Component, OnInit } from '@angular/core';
import { faBed, faUtensils, faBell, faEnvelope, faCog, faMoneyCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';

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
