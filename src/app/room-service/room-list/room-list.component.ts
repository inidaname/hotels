import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomsService } from '../../shared/services/rooms.service';
import { RoomInfo } from '../../shared/interface/room.interface';
import { Country } from '../../shared/interface/country.interface';
import { COUNTRIES } from '../../shared/json/countries';
import { ApiService } from '../../shared/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit, AfterViewChecked {

  customerForm: FormGroup;
  countries: Country[] = COUNTRIES;
  default = 'Nigeria';
  setClass: boolean;
  @ViewChild('passportNumber', { static: true }) passportNumber: ElementRef;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomsService,
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

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
      comingFrom: ['', Validators.required],
      nextDestination: ['', Validators.required],
      passportNumber: [''],
      issuedAt: [''],
      issuedDate: [''],
      representation: [''],
      companyName: [''],
      companyNumber: [''],
      companyAddress: [''],
      paymentMethod: ['', Validators.required],
      purposeOfVisit: [''],
      nextOfKin: [''],
      nextOfKinNumber: [''],
      nextOfKinRelation: [''],
      arrivalDate: ['', Validators.required],
      departureDate: ['', Validators.required],
      room: [''],
      checkedInBy: [''],
      numberOfPersons: [''],
      checkedInStatus: ['', Validators.required],
      amountPaid: [''],
      roomNumber: [''],
      image: ['']
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

  bookARoom() {
  if (this.customerForm.valid) {
      this.customerForm.controls.checkedInBy.setValue(localStorage.getItem('currentUser'));
      this.customerForm.controls.image.setValue([]);
      this.roomService.sendRoom(this.customerForm.value);
      this.router.navigateByUrl('/roomservice/otherservice');
    }
  }

  sendType() {
    this.roomService.setReserve({
      reservation: this.customerForm.controls.checkedInStatus.value
    });
  }

  selectRoom(st: RoomInfo) {
    this.customerForm.controls.roomNumber.setValue(st.roomNumber);
    this.customerForm.controls.room.setValue(st._id);
    this.customerForm.controls.amountPaid.setValue(st.roomTypeId.roomPrice);
    this.roomService.setRoom({
      roomNumber: st.roomNumber,
      roomPrice: st.roomTypeId.roomPrice
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
