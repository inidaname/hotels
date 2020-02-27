import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { PrinterService } from '../../services/printer.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RoomsService } from '../../services/rooms.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoomLodge } from 'app/shared/interface/customer.interface';

@Component({
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit, AfterViewChecked {

  printData: any;
  currentUser: any;
  roompage: RoomLodge;

  constructor(
    private jwt: JwtHelperService,
    private printer: PrinterService,
    private spinner: NgxSpinnerService
  ) {
    console.log(localStorage)
    this.currentUser = this.jwt.decodeToken().fullName;
    this.printData = (localStorage.getItem('print')) ? JSON.parse(localStorage.print) : '';
    this.roompage = (localStorage.getItem('roompage')) ? JSON.parse(localStorage.roompage) : '' ;
  }

  ngOnInit() {
    if (localStorage.print) {
      localStorage.removeItem('print');
    }

    if (localStorage.roompage) {
      localStorage.removeItem('roompage');
      this.printData = '';
    }
    if (this.printData || this.roompage) {
      window.print();
    }
  }

  ngAfterViewChecked(): void {
  }

}
