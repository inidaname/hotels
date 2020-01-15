import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../../shared/services/api.service';
import { RoomsService } from '../../shared/services/rooms.service';

@Component({
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  message: any;
  guest$: any;
  searchCheck: any;
  lodgedId: any;
  bills: any[];
  checked: boolean;
  checkedOut: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private api: ApiService,
    private roomService: RoomsService
  ) {
    this.message = '';
    this.bills = [];
    this.checked = false;
    this.checkedOut = false;
  }

  ngOnInit() {
    this.roomService.currentSend.subscribe(room => {
      if (room) {
        this.lodgedId = room._id;
        this.guest$ = room;
      }
    });
  }

  searchGuest() {
    if (this.searchCheck.length >= 2) {
      this.spinner.show();
      const gu = this.api.searchGuest(this.searchCheck).subscribe((guest: any) => {
        this.guest$ = guest.data;
        this.lodgedId = guest.data._id;
        this.spinner.hide();
        gu.unsubscribe();
      }, er => this.message = `No guest found`);
    }
  }

  loadBill() {
    this.spinner.show();
    this.checked = false;
    this.api.getBills(this.lodgedId).subscribe((er: any) => {
      er.data.forEach((d: any[]) => {
        if (d.length > 0) {
          this.bills.push(d);
        }
        if (this.bills.length <= 0) {
          this.checked = true;
        } else {
          this.checked = false;
        }
      });
    });
  }

  checkOut() {
    this.api.updateLodge(this.lodgedId, {room: this.guest$.room._id, checkedInStatus: 'available'})
      .subscribe(e => {
        if (e) {
          this.checkedOut = true;
        }
      });
  }
}
