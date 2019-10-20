import { Component, OnInit, Input } from '@angular/core';
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
import { NavList } from '@shared/interface';

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

  @Input() navList: NavList[];

  constructor() { }

  ngOnInit() {
    console.log(this.navList)
  }

}
