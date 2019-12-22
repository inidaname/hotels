import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from '@services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.scss']
})
export class OtherServiceComponent implements OnInit {
  guest$: any;
  roomNumberSearch: any;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private api: ApiService
  ) {
    this.message = '';
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const getG = this.api.getGuest(id).subscribe(guest => {
        this.guest$ = guest;
        getG.unsubscribe();
      });
    }
  }

  upDate(doMe) {
    if (doMe === 'checkin') {
      this.router.navigateByUrl('checkout')
    }
  }

  searchRoom(value){
    this.message = null;
    this.spinner.show('check',
      {
        type: 'ball-scale-pulse',
        size: 'large',
        bdColor: 'rgba(105,105,105, .3)',
        color: 'grey',
        fullScreen: true
      }
    );
    if (value && value.length >= 3) {
      const gu = this.api.searchGuest(value).subscribe((guest: any) => {
        console.log(guest)
        this.guest$ = guest.data;
        this.spinner.hide()
        gu.unsubscribe();
      }, er => this.message = `No guest found`);
    }
  }

}
