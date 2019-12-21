import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.print();
  }

}
