import { Component, OnInit } from '@angular/core';
import { RoomLodge } from 'app/shared/interface/customer.interface';
import { ApiService } from 'app/shared/services/api.service';
import { SalesInterface } from 'app/shared/interface/sales.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  userData: RoomLodge;
  billsList: SalesInterface[][];
  totalBill: number;
  otherBill: number;
  roomBill: number;

  constructor(
    private api: ApiService
  ) {
    this.billsList = [];
    this.totalBill = 0;
    this.roomBill = 0;
    this.otherBill = 0;
  }

  ngOnInit() {
    this.api.getBills(this.userData._id).subscribe((bills: any) => {
      bills.data.filter((bill: SalesInterface[]) => {
        if (bill.length > 0) {
          this.totalBill = bill.reduce((total, num) => total + num.amountPaid, 0);
          this.billsList.push(bill);
        }
      });
    });
  }

}
