import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from '@services/api.service';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { CountryService } from '@services/countries.service';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userFullname: any;
  userImage: any;
  product$: Observable<any>;
  requestProd: any;
  selectedData: any;
  admin: any;
  reqProd: any;
  reqData: any;
  qty: any;
  retr: boolean;
  alertType: string;
  message: string;

  constructor(
    private jwt: JwtHelperService,
    private api: ApiService,
    private cloudinary: Cloudinary,
    private product: CountryService,
    private spinner: NgxSpinnerService
  ) {
    this.requestProd = '';
    this.userFullname = {};
    this.product$ = this.product.product$;
    this.reqProd = [];
    this.reqData = [];
    this.retr = false;
  }

  ngOnInit() {
    const userById = this.api.getUserById().subscribe(user => {
      if (user) {
        // this.cloudinary.cloudinaryInstance.Image(user.data.image)
        this.userFullname = user.data;
        userById.unsubscribe();
      }
    });

    const adm = this.api.getAllStaff().subscribe( (admins: any) => {
      this.admin = admins.filter( v => v.userType === 'admin' || v.userType === 'superadmin');
      adm.unsubscribe();
    });
  }

  stringify(value) {
    this.selectedData = JSON.parse(value);
  }

  addProduct(value, qty) {
    const index = this.reqProd.findIndex(val => val.productDetail._id === value._id);

    if (index >= 0) {
      this.reqProd[index].productQuantity = qty;
    } else {
      this.reqProd.push({ productDetail: value, productQuantity: qty });
    }
    const ind = this.reqData.findIndex(val => val.productDetail._id === value._id);

    if (ind >= 0) {
      this.reqData[index].productQuantity = qty;
    } else {
      this.reqData.push({ productDetail: value._id, productQuantity: qty });
    }
  }

  sendRequest() {
    this.retr = false;
    this.message = '';
    this.spinner.show('request',
    {
      type: 'ball-scale-pulse',
      size: 'large',
      bdColor: 'rgba(105,105,105, .3)',
      color: 'grey',
      fullScreen: true
    });
    const obs = {
      requestBy: this.jwt.decodeToken().userId,
      productRequest: this.reqData,
      bar: 'Pool bar'
    }
    const send = this.api.sendRequest(obs).subscribe(e => {
      if (e) {
        this.reqData = [];
        this.reqProd = [];
        this.retr = true;
        this.alertType = 'success';
        this.message = 'Request Submitted Successfully';
        this.spinner.hide('request');
        send.unsubscribe();
      }
    }, er => {
      this.retr = true;
      this.alertType = 'danger';
      this.message = 'There was an Error';
      this.spinner.hide('request');
      send.unsubscribe();
    } );
  }

  close() {
    this.retr = false;
    this.message = '';
  }

}
