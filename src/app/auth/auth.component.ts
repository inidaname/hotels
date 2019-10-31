import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ShareService } from '@services/share.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewChecked {

  loadString: string;

  constructor(
    private spinner: NgxSpinnerService,
    private loadStatus: ShareService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.

    this.loadStatus.currentStatus.subscribe(st => {
      if (st === true) {
        this.loadString = "Show"
      }
    })
  }

}
