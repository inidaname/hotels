import { Component, OnInit } from '@angular/core';
import { RoomLodge } from 'app/shared/interface/customer.interface';
import { ApiService } from 'app/shared/services/api.service';
import { SalesInterface } from 'app/shared/interface/sales.interface';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  userData: RoomLodge;
  billsList: Observable<SalesInterface[][]>;
  totalBill: number;
  otherBill: number;
  roomBill: number;
  unpaid: boolean;
  bar: string[];
  restaurant: string[];

  constructor(
    private api: ApiService,
    public activeModal: NgbActiveModal,
    private  spinner: NgxSpinnerService,
    private service: ShareService
  ) {
    this.bar = [];
    this.restaurant = [];
    this.unpaid = false;
    this.totalBill = 0;
    this.roomBill = 0;
    this.otherBill = 0;
  }

  ngOnInit() {
    if (this.roomBill > 0) {
      this.unpaid = true;
    }
    this.billsList = this.api.getBills(this.userData._id);
    this.api.getBills(this.userData._id).subscribe((bills: SalesInterface[][]) => {
      const gettotalBill = bills.map((bill, i) => {
        if (bill.length > 0) {
          return bill.reduce((total, num) => total + num.amountPaid, 0)
        }
        return 0;
      });
      this.totalBill = gettotalBill.reduce((pr, cr) => pr + cr, 0);
      bills.filter((bill: SalesInterface[], i) => {
        if (bill.length > 0) {
          this.unpaid = true;
        }
        for (let i = 0; i < bill.length; i++) {
          const place = bill[i];
          if (place.place === 'poolBar' || place.place === 'mainBar') {
            this.bar.push(place._id);
          }
          if (place.place === 'restaurant') {
            this.restaurant.push(place._id);
          }
        }
      });
    });
  }

  makePayment() {
    this.spinner.show();
    const payment = {
      recievedBy: localStorage.getItem('currentUser'),
      paymentMethod: '',
      barSales: this.bar,
      mealSales: this.restaurant,
      checkOut: this.userData._id,
      amountRecieved: this.totalBill + this.roomBill,
    };
    this.api.makePayment(payment).subscribe(income => {
      this.totalBill = 0;
      this.roomBill = 0;
      this.unpaid = false;
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }

  checkoutGuest() {
    this.spinner.show();
    this.api.updateLodge(this.userData._id, { room: this.userData.room._id, checkedInStatus: 'available'})
      .subscribe(e => {
        this.service.changeData(true);
        this.activeModal.dismiss();
        this.spinner.hide();
      }, err => this.spinner.hide());
  }

}
