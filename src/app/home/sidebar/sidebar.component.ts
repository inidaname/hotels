import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faCheckSquare, faDoorOpen, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faDoorOpen = faDoorOpen;
  faCheckSquare = faCheckSquare;
  faEnvelope = faEnvelope;
  faUser = faUser;

  constructor() { }

  ngOnInit() {
  }

}
