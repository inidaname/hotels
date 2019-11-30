import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder
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
    console.log(this.customerForm.value)
  }

}
