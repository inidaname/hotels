import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope, faCheckSquare, faDoorOpen, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { fa } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faDoorOpen = faDoorOpen;
  faCheckSquare = faCheckSquare;
  faEnvelope = faEnvelope;
  faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

}
