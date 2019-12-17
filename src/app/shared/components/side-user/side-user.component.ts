import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { RoomsService } from '@services/rooms.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '@services/api.service';

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

  constructor(
    private roomService: RoomsService,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  makePurchase() {
    const purchase = {
      sellerId: localStorage.getItem('currentUser'),
      productSold: this.roomService.getTotalPrice(),
      amountPaid: this.sumPrice,
      paymentMethod: ''
    };

    this.api.makePurchase(purchase).subscribe(e => console.log(e))
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
        this.sumPrice = da.reduce((a,b) => a +(b.product.productPrice * b.quantity), 0);
      }
    });
  }

}
