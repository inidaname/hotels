import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '@services/api.service';
import { RoomsService } from '@services/rooms.service';

@Component({
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  message: any;
  guest$: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private api: ApiService,
    private roomService: RoomsService
  ) {
    this.message = '';
  }

  ngOnInit() {
    this.roomService.currentRoom.subscribe(room => {
      this.guest$ = room;
      console.log(this.guest$)
    })
  }

}
