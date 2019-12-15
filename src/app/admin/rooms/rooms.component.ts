import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  roomForm: FormGroup;
  roomTypeForm: FormGroup;
  roomtypes$: BehaviorSubject<any>;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private modal: NgbModal
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
      roomDescription: ['', Validators.required],
      roomPrice: ['', Validators.required],
      // image: ['']
    });
  }

  get typeList() { return this.roomtypes$.asObservable(); }

  get f() { return this.roomForm.controls; }
  get g() { return this.roomTypeForm.controls; }

  createRoom() {
    console.log(this.roomForm.value);
    if (this.roomForm.valid) {
      this.api.createRoom(this.roomForm.value).subscribe(er => console.log(er))
    }
  }

  createType() {
    if (this.roomTypeForm.valid) {
      this.api.createRoomType(this.roomTypeForm.value).subscribe(er => console.log(er));
    }
  }

  openModal(content) {
    this.modal.open(content)
  }

}
