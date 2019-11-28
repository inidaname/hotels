import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@services/api.service';

@Component({
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  roomForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.roomForm = this.fb.group({
      roomName: ['', Validators.required],
      roomNumber: ['', Validators.required],
      roomType: ['', Validators.required],
      roomDescription: ['', Validators.required],
      roomCondition: [''],
      roomPrice: ['', Validators.required]
    });
  }

  get f() { return this.roomForm.controls; }

  createRoom() {
    this.api.createRoom(this.roomForm.value).subscribe(er => console.log(er))
  }

}
