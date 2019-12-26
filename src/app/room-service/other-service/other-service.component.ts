import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { ApiService } from '@services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from '@components/image-upload/image-upload.component';
import { ImageService } from '@services/image.service';
import { HttpClient } from '@angular/common/http';
import { RoomsService } from '@services/rooms.service';

@Component({
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.scss']
})
export class OtherServiceComponent implements OnInit, AfterViewChecked {
  guest$: any;
  roomNumberSearch: any;
  message: string;
  component: typeof ImageUploadComponent;
  image: any[];
  setIt: boolean;
  dataRoom: any;
  amountToPay: any;
  alertType: string;
  payable: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private api: ApiService,
    private modalService: NgbModal,
    private imageService: ImageService,
    private http: HttpClient,
    private cloudinary: Cloudinary,
    private roomService: RoomsService
  ) {
    this.message = '';
    this.image = [];
    this.setIt = true;
  }

  ngOnInit() {
    this.component = ImageUploadComponent;
    this.roomService.currentSend.subscribe(guest => {
      if (guest) {
        this.guest$ = guest;
        this.amountToPay = guest.amountPaid;
      }
    })

    // if (id) {
    //   const getG = this.api.getGuest(id).subscribe(guest => {
    //     this.guest$ = guest;
    //     getG.unsubscribe();
    //   });
    // }
  }

  ngAfterViewChecked() {
    const imag = this.imageService.currentData.subscribe((e: []) => {
      if (e.length && this.setIt === true) {
        this.image = e;
      }
      // imag.unsubscribe();
    });
  }

  close() {
    this.message = '';
  }

  modal(){
    const modal = this.modalService.open(this.component, {size: 'lg'});
    modal.componentInstance.uploadLocation = 'GuestsID';
  }

  checkIn(doIn) {
    if (doIn === 'checkin' && this.guest$._id) {
      this.spinner.show();
      this.api.updateLodge(this.guest$._id, {roomStatus: `occupied`, amountPaid: this.guest$.amountPaid + this.payable})
        .subscribe(ret => {
          if (ret) {
            this.spinner.hide();
            this.message = 'Checked in successfully';
            this.alertType = 'success';
          }
        }, e => {
          this.spinner.hide();
          this.message = 'Something went wrong';
          this.alertType = 'danger';
        });
    } else if (doIn === 'checkout') {
      this.roomService.sendRoom(this.guest$);
      this.router.navigateByUrl('roomservice/checkout');
    }
  }

  upDate() {
    this.message = '';
    this.image.forEach(e => this.guest$.image.push(e.data.url));
    this.roomService.price.subscribe(p => {
      this.guest$.amountPaid = (p === 'reservation') ? 5000 : this.amountToPay;
      this.spinner.show();
      this.api.createRoomLodge(this.guest$).subscribe(log => {
        if (log) {
          this.message = 'Customer booked';
          this.spinner.hide();
          this.alertType = 'success';
        }
      }, e => {
        this.message = 'Something went wrong';
        this.alertType = 'danger';
      });
    })
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
        this.guest$ = guest.data;
        this.spinner.hide()
        gu.unsubscribe();
      }, er => this.message = `No guest found`);
    }
  }

  deleteItem = function(data, i){
    console.log(data)
    const url = `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/delete_by_token`;
    const headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
    const options = { headers: headers };
    const body = {
      token: data.delete_token
    };
    this.http.post(url, body, options).subscribe(response => {
      console.log(`Deleted image - ${data.public_id} ${response.result}`);
      // Remove deleted item for responses
      this.setIt = false;
      this.image.splice(i, 1);
    });
  }

}
