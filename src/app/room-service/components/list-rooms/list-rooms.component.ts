import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent implements OnInit {

  roomLogForm: FormGroup;
  position: boolean;

  constructor(
    private fb: FormBuilder
  ) {
    this.position = false;
  }

  ngOnInit() {
    this.roomLogForm = this.fb.group({
      checkedInStatus: [''],
      discount: [''],
      amountPaid: [''],
      numberOfPersons: [''],
      purposeOfVisit: [''],
      paymentMethod: [''],
      arrivalDate: [''],
      departureDate: ['']
    });
  }

  get f() { return this.roomLogForm.controls; }

  goNext(){
    this.position = true;
  }
  goBack() {
    this.position = false;
  }
}
