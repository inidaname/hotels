import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ShareService } from '@services/share.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewChecked, AfterViewInit {

  loadString: string;

  constructor(
    private spinner: NgxSpinnerService,
    private loadStatus: ShareService,
    private routes: Router
  ) {
    this.routes.events.subscribe(val => {
      if (val instanceof NavigationEnd && val.urlAfterRedirects !== '/auth/login') {
        this.routes.navigateByUrl('/auth/login');
      }
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  ngAfterViewChecked(): void {
    // Called after every check of the component's view. Applies to components only.
    // Add 'implements AfterViewChecked' to the class.

    this.loadStatus.currentStatus.subscribe(st => {
      if (st === true) {
        this.spinner.show('N',
          {
            type: 'ball-scale-pulse',
            size: 'large',
            bdColor: 'rgba(105,105,105, .8)',
            color: 'white',
            fullScreen: false
          }
        );
      }
    });
  }

}
