import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomsService } from '@services/rooms.service';
import { RoomInfo } from '@shared/interface';

@Component({
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomsService
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      customerName: ['Hassan', Validators.required],
      customerID: ['', Validators.required],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerAddress: [''],
      customerNumber: ['', Validators.required]
    });
  }

  get f() { return this.customerForm.controls; }

  bookARoom() {
    console.log(this.customerForm.value);
  }

  selectRoom(st: RoomInfo) {
    this.roomService.setRoom({
      roomNumber: st.roomNumber,
      roomPrice: st.roomPrice
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
