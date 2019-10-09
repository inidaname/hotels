import { Component, OnInit } from '@angular/core';
import { faCoffee, faBars, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faCoffee = faCoffee;
  faBars = faBars;
  faBell = faBell;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
