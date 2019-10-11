import { Component, OnInit } from '@angular/core';
import {
  faTachometerAlt,
  faUserTie,
  faUtensils,
  faBed,
  faHandHoldingUsd,
  faEnvelope,
  faCogs,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faTachometerAlt = faTachometerAlt;
  faUserTie = faUserTie;
  faUtensils = faUtensils;
  faBed = faBed;
  faHandHoldingUsd = faHandHoldingUsd;
  faEnvelope = faEnvelope;
  faCogs = faCogs;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit() {
  }

}
