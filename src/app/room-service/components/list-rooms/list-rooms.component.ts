import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss']
})
export class ListRoomsComponent implements OnInit {

  roomLogForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.roomLogForm = this.fb.group({
      checkedInStatus: [''],
      discount: [''],
      amountPaid: [''],
      numberOfPersons: [''],
      purposeOfVisit: [''],
      paymentMethod: ['']
    });
  }

  get f() { return this.roomLogForm.controls; }


}
