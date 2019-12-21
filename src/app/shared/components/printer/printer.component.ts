import { Component, OnInit } from '@angular/core';
import { PrinterService } from '@services/printer.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {

  printData: Observable<any>;
  currentUser: any;

  constructor(
    private printer: PrinterService,
    private jwt: JwtHelperService
  ) {
    this.printData = this.printer.getData;
    this.currentUser = this.jwt.decodeToken().fullName;
  }

  ngOnInit() {
    if (this.printData !== null) {
      window.print();
    }
  }

}
