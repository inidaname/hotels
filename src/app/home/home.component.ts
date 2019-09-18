import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faCheckSquare, faDoorOpen, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { fa } from '@fortawesome/fontawesome-common-types';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countries = COUNTRIES;

  faSignOutAlt = faSignOutAlt;
  faDoorOpen = faDoorOpen;
  faCheckSquare = faCheckSquare;
  faEnvelope = faEnvelope;
  faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

}
