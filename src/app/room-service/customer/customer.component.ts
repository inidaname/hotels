import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomsService } from '../../shared/services/rooms.service';
import { RoomInfo } from '../../shared/interface/room.interface';
import { Country } from '../../shared/interface/country.interface';
import { COUNTRIES } from '../../shared/json/countries';
import { ApiService } from '../../shared/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { NgbAccordionConfig, NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ListRoomsComponent } from '../components/list-rooms/list-rooms.component';
import { CustomerInterface } from '../../shared/interface/customer.interface';
import { ImageUploadComponent } from '../../shared/components/image-upload/image-upload.component';
import { ImageService } from '../../shared/services/image.service';


@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [NgbAccordionConfig, NgbModalConfig]
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;
  countries: Country[] = COUNTRIES;
  default = 'Nigeria';
  setClass: boolean;
  @ViewChild('passportNumber', { static: true }) passportNumber: ElementRef;
  @ViewChild('roomContent', { static: true }) roomContent: ElementRef;
  @ViewChild('resultSearch', { static: true }) resultSearch: ElementRef;
  component: typeof ListRoomsComponent;
  imageUpload: typeof ImageUploadComponent;
  roomPrice: any;
  searchExisting: any;
  alertClass: string;
  alertMessage: string;
  alertType: boolean;
  customerDetail: CustomerInterface;
  openedModal: NgbModalRef;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomsService,
    private router: Router,
    private config: NgbAccordionConfig,
    private modal: NgbModal,
    private modalConfig: NgbModalConfig,
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private shareService: ImageService
  ) {
    this.roomPrice = 0;
    this.config.closeOthers = true;
    this.component = ListRoomsComponent;
    this.imageUpload = ImageUploadComponent;
    this.modalConfig.backdrop = 'static';
    this.modalConfig.size = 'lg';
    this.modalConfig.keyboard = false;
  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      customerName: ['', Validators.required],
      city: [''],
      country: [''],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerProfession: ['', Validators.required],
      customerAddress: [''],
      customerNumber: ['', Validators.required],
      nationality: ['', Validators.required],
      passportNumber: [''],
      issuedAt: [''],
      issuedDate: [''],
      representation: [''],
      companyName: [''],
      companyNumber: [''],
      companyAddress: [''],
      nextOfKin: [''],
      nextOfKinNumber: [''],
      nextOfKinRelation: [''],
      createdBy: [''],
      image: [''],
    });
    this.customerForm.controls.nationality.setValue(this.default, { onlySelf: true });
    this.customerForm.controls.country.setValue(this.default, { onlySelf: true });
  }

  ngAfterViewChecked(): void {

    this.customerForm.controls.nationality.valueChanges.subscribe(checked => {
      if (checked !== 'Nigeria') {
        this.setClass = true;
        this.customerForm.controls.passportNumber.setValidators([Validators.required]);
        this.customerForm.controls.passportIssue.setValidators([Validators.required]);
        this.customerForm.controls.issueDate.setValidators([Validators.required]);
      } else {
        this.setClass = false;
        this.customerForm.controls.passportNumber.setValidators(null);
        this.customerForm.controls.passportIssue.setValidators(null);
        this.customerForm.controls.issueDate.setValidators(null);
      }
      this.customerForm.updateValueAndValidity();
    });
  }

  get f() { return this.customerForm.controls; }

  createCustomer() {
    this.spinner.show();
    if (this.customerForm.valid) {
      this.shareService.currentData.subscribe(val => {
        this.customerForm.controls.image.setValue(val);
        this.customerForm.controls.createdBy.setValue(localStorage.getItem('currentUser'));
        this.api.createCustomer(this.customerForm.value).subscribe((customer: CustomerInterface) => {
          this.spinner.hide();
          const listRoom = this.modal.open(this.component, { keyboard: false, backdrop: false, size: 'xl' });
          listRoom.componentInstance.userData = customer;
        }, err => {
          this.spinner.hide();
        });
      });
    }
  }

  searchCustomer() {
    if (this.searchExisting && this.searchExisting.length >= 3) {
      this.spinner.show();
      this.api.searchCustomer(this.searchExisting).subscribe((customer: CustomerInterface) => {
        this.customerDetail = customer;
        this.spinner.hide();
        this.alertClass = 'success';
        this.alertMessage = `${customer.customerName} Found.`;
        this.alertType = true;
        this.openedModal = this.modal.open(this.resultSearch);
      },
        err => {
          this.alertClass = 'danger';
          this.alertMessage = `No Customer with that info was Found.`;
          this.alertType = false;
          this.openedModal = this.modal.open(this.resultSearch);

          this.spinner.hide();
        });
    }
  }

  UploadModal() {
    const modal = this.modal.open(this.imageUpload, {size: 'lg'});
    modal.componentInstance.uploadLocation = 'GuestsID';
  }


  openModalCustomer() {
    if (this.customerDetail) {
      this.openedModal.dismiss();
      const listRoom = this.modal.open(this.component, { keyboard: false, backdrop: false, size: 'xl' });
      listRoom.componentInstance.userData = this.customerDetail;
    }
  }


  sendType() {
    this.roomService.setReserve({
      reservation: this.customerForm.controls.checkedInStatus.value
    });
  }


  checkValue() {
    this.roomService.setData({
      name: this.customerForm.controls.customerName.value,
      address: this.customerForm.controls.customerAddress.value,
      phone: this.customerForm.controls.customerNumber.value,
      email: this.customerForm.controls.customerEmail.value
    });
  }

}
