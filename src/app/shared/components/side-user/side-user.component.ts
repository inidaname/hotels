import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { RoomsService } from '@services/rooms.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '@services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgModel } from '@angular/forms';
import { PrinterService } from '@services/printer.service';

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

  constructor(
    private roomService: RoomsService,
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private printer: PrinterService
  ) {
    this.message = null;
    this.guestName = null;
    this.userAdmin = [];
    this.paymentMethod = null;
    this.compli = null;
  }

  ngOnInit() {
  }

  checkRoom(value) {
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
      this.api.searchGuest(value).subscribe((guest: any) => {
        this.guestName = guest.data.customerName;
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

  makePurchase() {
    const purchase = {
      sellerId: localStorage.getItem('currentUser'),
      productSold: this.roomService.getTotalPrice(),
      amountPaid: this.sumPrice,
      paymentMethod: this.paymentMethod,
      complimentVal: this.compli
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
      if (sale) {
        console.log(purchase)
        this.printer.setData(purchase);
        window.open('/print', "_blank");
        this.message = 'Success';
        this.alertType = 'success';
        this.spinner.hide('sales');
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
        }
      });

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
        this.sumQuantity = da.reduce((a, b) => a + b.quantity, 0);
        this.sumPrice = da.reduce((a, b) => a + (b.product.productPrice * b.quantity), 0);
      }
    });
  }

}
