import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { PrinterService } from '@services/printer.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RoomsService } from '@services/rooms.service';

@Component({
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit, AfterViewChecked {

  printData: any;
  currentUser: any;

  constructor(
    private jwt: JwtHelperService,
    private printer: PrinterService,
  ) {
    this.currentUser = this.jwt.decodeToken().fullName;
    this.printData = JSON.parse(localStorage.print);
  }

  ngOnInit() {
    if (localStorage.print) {
      localStorage.removeItem('print');
    }
    if (this.printData) {
      window.print();
    }
  }

  ngAfterViewChecked(): void {
  }

}
