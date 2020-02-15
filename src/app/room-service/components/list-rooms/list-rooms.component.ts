import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss'],
  providers: [NgbModalConfig]
})
export class ListRoomsComponent implements OnInit, OnDestroy {

  roomLogForm: FormGroup;
  position: boolean;

  constructor(
    private fb: FormBuilder,
    private modalConfig: NgbModalConfig,
    private modal: NgbModal
  ) {
    this.position = false;
    this.modalConfig.backdrop = 'static';
    this.modalConfig.size = 'lg';
    this.modalConfig.keyboard = false;
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
  cancalModal() {
    this.modal.dismissAll();
  }

  ngOnDestroy() {
    console.log('Yes')
  }
}
