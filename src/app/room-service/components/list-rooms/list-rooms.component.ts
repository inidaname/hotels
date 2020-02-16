import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CustomerInterface } from '../../../shared/interface/customer.interface';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.scss'],
  providers: [NgbModalConfig]
})
export class ListRoomsComponent implements OnInit, OnDestroy {

  roomLogForm: FormGroup;
  position: boolean;
  userData: CustomerInterface;
  @ViewChild('confirmCancel', {static: true}) confirmCancel: ElementRef;
  confirm: NgbModalRef;

  constructor(
    private fb: FormBuilder,
    private modalConfig: NgbModalConfig,
    private modal: NgbModal,
    public activeModal: NgbActiveModal
  ) {
    this.position = false;
    this.modalConfig.backdrop = 'static';
    this.modalConfig.size = 'lg';
    this.modalConfig.keyboard = false;
  }

  ngOnInit() {
    console.log(this.userData)
    this.roomLogForm = this.fb.group({
      checkedInStatus: [''],
      discount: [''],
      amountPaid: [''],
      numberOfPersons: [''],
      purposeOfVisit: [''],
      paymentMethod: [''],
      arrivalDate: [''],
      departureDate: [''],
      comingFrom: [''],
      nextDestination: [''],
    });
  }

  get f() { return this.roomLogForm.controls; }

  goNext() {
    this.position = true;
  }
  goBack() {
    this.position = false;
  }
  cancalModal() {
    this.modal.dismissAll();
  }

  confirmCancelModal() {
    this.confirm = this.modal.open(this.confirmCancel);
  }

  notReady() {
    this.confirm.dismiss();
  }

  ngOnDestroy() {
    console.log('Yes')
  }

  bookARoom() {
    if (this.roomLogForm.valid) {
      this.roomLogForm.controls.checkedInBy.setValue(localStorage.getItem('currentUser'));
      this.roomLogForm.controls.image.setValue([]);
      // this.roomLogForm.controls.amountPaid.setValue(st.roomTypeId.roomPrice);
      // this.roomService.sendRoom(this.roomLogForm.value);
      // this.router.navigateByUrl('/roomservice/otherservice');
    }
  }
  setDiscount() {
    if (this.roomLogForm.controls.discount.value === true) {
      this.roomLogForm.controls.amountPaid.setValidators([Validators.required]);
      this.roomLogForm.updateValueAndValidity();
    } else {
      // this.roomLogForm.controls.amountPaid.setValue(this.roomPrice);
      this.roomLogForm.controls.amountPaid.setValidators(null);
      this.roomLogForm.updateValueAndValidity();
    }
  }

  sendDiscount() {
    // this.roomService.setDiscount({
    //   discount: true,
    //   amountToPay:  this.roomLogForm.controls.amountPaid.value
    // });
  }

  selectRoom(st) {
    if (st.roomStatus === 'available'){
      console.log(st)
      this.roomLogForm.controls.roomNumber.setValue(st.roomNumber);
      this.roomLogForm.controls.room.setValue(st._id);
      // this.roomPrice = st.roomTypeId.roomPrice;
      this.roomLogForm.controls.amountPaid.setValue(st.roomTypeId.roomPrice);
      // this.roomService.setRoom({
      //   roomNumber: st.roomNumber,
      //   roomPrice: st.roomTypeId.roomPrice
      // });
    }
  }

}
