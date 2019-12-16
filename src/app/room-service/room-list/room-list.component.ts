import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomsService } from '@services/rooms.service';
import { RoomInfo, Country } from '@shared/interface';
import { COUNTRIES } from '@shared/json/countries';

@Component({
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit, AfterViewChecked {

  customerForm: FormGroup;
  countries: Country[] = COUNTRIES;
  default = 'Nigeria';
  setClass: boolean;
  @ViewChild('passportNumber', {static: true}) passportNumber: ElementRef;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomsService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      customerName: ['', Validators.required],
      customerID: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerProfession: ['', Validators.required],
      customerAddress: [''],
      customerNumber: ['', Validators.required],
      nationality: ['', Validators.required],
      comingFrom: ['', Validators.required],
      nextDestination: ['', Validators.required],
      passportNumber: ['', Validators.required],
      passportIssue: [''],
      issueDate: [''],
      representation: [''],
      companyName: [''],
      companyEmail: [''],
      companyNumber: [''],
      companyAddress: [''],
      paymentMethod: ['', Validators.required],
      purposeOfVisit: [''],
      nextOfKin: [''],
      nextOfKinNumber: [''],
      nextOfKinRelation: [''],
      arrivalDate: ['', Validators.required],
      departureDate: ['', Validators.required]
    });
    this.customerForm.controls.nationality.setValue(this.default, {onlySelf: true});
  }

  ngAfterViewChecked(): void {

    this.cdRef.detectChanges();

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

    // if (this.customerForm.controls.nationality.value !== 'Nigeria') {
    //   this.setClass = true;
    // } else {
    //   this.customerForm.controls.passportNumber.errors.required = false;
    //   this.setClass = false;
    //   this.customerForm.updateValueAndValidity();
    //   console.log(this.customerForm.controls);
    // }

    // if (this.setClass && !this.customerForm.controls.passportNumber.value) {
    //   this.customerForm.controls.passportNumber.setErrors({invalid: true});
    //   this.passportNumber.nativeElement.classList.add('is-invalid');
    // } else {
    //   // this.customerForm.controls.passportNumber.setErrors({invalid: false});
    //   console.log(this.customerForm.controls.passportNumber.status)
    //   this.passportNumber.nativeElement.classList.remove('is-invalid');
    // }
  }

  get f() { return this.customerForm.controls; }

  bookARoom() {
    console.log(this.customerForm.value);
  }

  selectRoom(st: RoomInfo) {
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
