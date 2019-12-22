import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '@services/api.service';

@Component({
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  message: any;
  guest$: any;

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
    const getG = this.api.getGuest(id).subscribe(guest => {
      this.guest$ = guest;
      getG.unsubscribe();
    });
  }

}
