import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, timer } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoomService } from '../../shared/services/room.service';

@Component({
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  roomForm: FormGroup;
  roomTypeForm: FormGroup;
  roomtypes$: BehaviorSubject<any>;
  message: string;
  alertType: string;
  roomTypeReady: boolean;
  roomTypeName: any;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private modal: NgbModal,
    private spinner: NgxSpinnerService,
    private roomService: RoomService
  ) {
    this.roomtypes$ = new BehaviorSubject('');
  }

  ngOnInit() {
    this.api.getRoomTypes().subscribe(rt => this.roomtypes$.next(rt));
    this.roomForm = this.fb.group({
      roomNumber: ['', Validators.required],
      roomCondition: [''],
      roomTypeId: ['', Validators.required]
    });

    this.roomTypeForm = this.fb.group({
      roomType: ['', Validators.required],
      roomDescription: [''],
      roomPrice: ['', Validators.required]
      // image: ['']
    });
  }

  get typeList() {
    return this.roomtypes$.asObservable();
  }

  get f() {
    return this.roomForm.controls;
  }
  get g() {
    return this.roomTypeForm.controls;
  }

  createRoom() {
    if (this.roomForm.valid) {
      this.message = '';
      this.spinner.show('rm', {
        type: 'ball-scale-pulse',
        size: 'large',
        bdColor: 'rgba(105,105,105, .3)',
        color: 'grey',
        fullScreen: true
      });
      const rm = this.api.createRoom(this.roomForm.value).subscribe(
        er => {
          this.spinner.hide('rm');
          if (er) {
            this.message = er.message;
            this.alertType = 'success';
            this.roomService.updateData();
            rm.unsubscribe();
          }
        },
        err => {
          this.message = err.message;
          this.alertType = 'danger';
          this.spinner.hide('rm');
          this.roomService.updateData();
          rm.unsubscribe();
        }
      );
    }
  }

  createType() {
    const wait = timer(5000);
    this.spinner.show('ty', {
      type: 'ball-scale-pulse',
      size: 'large',
      bdColor: 'rgba(105,105,105, .3)',
      color: 'grey',
      fullScreen: true
    });
    if (this.roomTypeForm.valid) {
      this.api.createRoomType(this.roomTypeForm.value).subscribe((er: any) => {
        if (er) {
          this.spinner.hide('ty');
          this.roomTypeReady = true;
          this.roomTypeName = er.data.roomType;
          this.api.getRoomTypes().subscribe(rt => this.roomtypes$.next(rt));
          wait.subscribe(val => {
            this.modal.dismissAll();
          });
        }
      });
    }
  }

  openModal(content) {
    this.roomTypeReady = false;
    this.modal.open(content);
  }
  close() {
    this.message = '';
  }
}
