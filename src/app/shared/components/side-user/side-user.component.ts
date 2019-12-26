import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { RoomsService } from '@services/rooms.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '@services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgModel } from '@angular/forms';
import { PrinterService } from '@services/printer.service';
import * as print from 'print-js';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-user',
  templateUrl: './side-user.component.html',
  styleUrls: ['./side-user.component.scss']
})
export class SideUserComponent implements OnInit, AfterViewChecked {

  faPlus = faPlus;
  faMinus = faMinus;
  data: any = {};
  room: any = {};
  @Input() purpose: string;
  product: any = [];
  sumPrice: number;
  sumQuantity: number;
  productSold: any[] = [];
  message: string;
  alertType: string;
  paymentMethod: NgModel;
  roomNumber: string;
  guestName: any;
  userAdmin: any[];
  compli: NgModel;
  reserve: any;
  payfull: any;
  lodgeId: any;

  constructor(
    private roomService: RoomsService,
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private printer: PrinterService,
    private route: Router,
  ) {
    this.message = null;
    this.guestName = null;
    this.userAdmin = [];
    this.paymentMethod = null;
    this.compli = null;
    this.reserve = {reservation: ''};
    this.payfull = null;
  }

  ngOnInit() {
    this.route.events.subscribe(n => {
      if (n instanceof NavigationEnd) {
        this.product = null;
        this.productSold = null;
        this.sumQuantity = null;
        this.sumPrice = null;
        this.roomService.setProduct(null);
        this.roomService.setTotalPrice(null);
      }
    });
  }

  checkRoom(value) {
    if (value && value.length >= 3) {
      this.spinner.show('check',
      {
        type: 'ball-scale-pulse',
        size: 'large',
        bdColor: 'rgba(105,105,105, .3)',
        color: 'grey',
        fullScreen: true
      });
      this.api.searchGuest(value).subscribe((guest: any) => {
        console.log(guest)
        this.guestName = guest.data.customerName;
        this.lodgeId = guest._id;
        this.spinner.hide('check');
      }, (err) => this.guestName = `Error:${err.message}`);
    }
  }

  close() {
    this.message = null;
  }

  checkUser() {
    this.api.getAllStaff().subscribe((st: any) => {
      if (st !== null) {
        this.userAdmin = st.filter(val => {
          if (val.userType === 'admin' || val.userType === 'superadmin') {
            return val;
          }
        });
      }
    });
  }

  clear() {
    this.product = null;
    this.productSold = null;
    this.sumQuantity = null;
    this.sumPrice = null;
    this.roomService.setProduct(null);
    this.roomService.setTotalPrice(null);
  }

  makePurchase() {
    const purchase = {
      sellerId: localStorage.getItem('currentUser'),
      productSold: this.roomService.getTotalPrice(),
      amountPaid: this.sumPrice,
      paymentMethod: this.paymentMethod,
      complimentVal: this.compli,
      roomNumber: this.lodgeId
    };

    this.spinner.show('sales',
      {
        type: 'ball-scale-pulse',
        size: 'large',
        bdColor: 'rgba(105,105,105, .3)',
        color: 'grey',
        fullScreen: true
      }
    );
    this.api.makePurchase(purchase).subscribe((sale: any) => {
      localStorage.setItem('print', JSON.stringify(sale));
      this.printer.setData(purchase)
      if (sale) {
        window.open('/print', '_blank');
        this.message = 'Success';
        this.alertType = 'success';
        this.spinner.hide('sales');
        this.product = null;
        this.productSold = null;
        this.sumQuantity = null;
        this.sumPrice = null;
        this.roomService.setProduct(null);
        this.roomService.setTotalPrice(null);
        // work.unsubscribe();
      }
    },
      (er: any) => {
        if (er) {
          this.spinner.hide('sales');
          this.message = 'Error: Something went wrong please try again';
          this.alertType = 'danger';
        }
      });
  }

  ngAfterViewChecked() {
    if (this.purpose === 'roomservice') {
      this.roomService.currentData.subscribe(data => {
        if (data) {
          this.data.name = data.name;
          this.data.address = data.address;
          this.data.phone = data.phone;
          this.data.email = data.email;
          this.data.otherservice = data.otherservice;
        } else {
          this.productSold = null;
          this.product = null;
        }
      });

      this.roomService.currentReservation.subscribe((res) => {
        this.reserve = res;
      } );

      this.roomService.currentRoom.subscribe(data => {
        if (data) {
          this.room.price = data.roomPrice;
          this.room.roomNumber = data.roomNumber;
        }
      });
    }


    this.roomService.currentProduct.subscribe((da) => {
      if (da) {
        this.product = da;
        console.log(da);
        this.sumQuantity = this.product.sale.reduce((a, b) => a + b.quantity, 0);
        this.sumPrice = this.product.sale.reduce((a, b) => a + ((this.product.bar === 'MainBar') ? b.product.mainBarPrice * b.quantity
        : b.product.poolBarPrice * b.quantity), 0);
      }
    });
  }

  working() {
    this.roomService.setThePrice(this.payfull); // set reservation of fulkl payment
  }

}
