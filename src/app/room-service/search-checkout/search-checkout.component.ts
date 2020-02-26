import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'app/shared/services/api.service';
import { RoomLodge } from 'app/shared/interface/customer.interface';
import { calculateDate } from 'app/shared/functions/dateCalculate';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from '../../shared/components/checkout/checkout.component';

@Component({
  templateUrl: './search-checkout.component.html',
  styleUrls: ['./search-checkout.component.scss']
})
export class SearchCheckoutComponent implements OnInit {

  message: any;
  alertType: string;
  guest$: RoomLodge;
  searchCheck: any;
  lodgedId: any;
  bills: any[];
  checked: boolean;
  checkedOut: boolean;
  daysSpent: number;
  checkout: typeof CheckoutComponent;

  constructor(
    private spinner: NgxSpinnerService,
    private api: ApiService,
    private modal: NgbModal
  ) {
    this.checkout = CheckoutComponent;
  }

  ngOnInit() {
  }

  searchGuest() {
    if (this.searchCheck.length >= 2) {
      this.spinner.show();
      const gu = this.api.searchGuest(this.searchCheck).subscribe((guest: RoomLodge) => {
        const today = Date.now();
        this.daysSpent = calculateDate(Date.parse(guest.createdAt), today);
        this.spinner.hide();
        this.message = `Room ${this.searchCheck} is occupied by <strong>${guest.customer.customerName}</strong>, more details below.`;
        this.alertType = 'success';
        this.guest$ = guest;
        this.lodgedId = guest._id;
        gu.unsubscribe();
      }, er => {
        this.alertType = 'danger';
        this.guest$ = null;
        this.message = `No guest in room ${this.searchCheck}`;
        gu.unsubscribe();
        this.spinner.hide();
      });
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

  checkModal() {
    const modal = this.modal.open(this.checkout);
    modal.componentInstance.userData = this.guest$;
    modal.componentInstance.roomBill = (this.guest$.room.roomTypeId.roomPrice * this.daysSpent) - this.guest$.amountPaid;
  }
}
