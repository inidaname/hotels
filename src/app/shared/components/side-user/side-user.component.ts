import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { RoomsService } from '@services/rooms.service';

@Component({
  selector: 'app-side-user',
  templateUrl: './side-user.component.html',
  styleUrls: ['./side-user.component.scss']
})
export class SideUserComponent implements OnInit, AfterViewChecked {

  data: any = {  };
  room: any = {  };

  constructor(
    private roomService: RoomsService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.roomService.currentData.subscribe(data => {
      if (data) {
        this.data.name = data.name;
        this.data.address = data.address;
        this.data.phone = data.phone;
        this.data.email = data.email;
        this.data.otherservice = data.otherservice;
      }
    });

    this.roomService.currentRoom.subscribe(data => {
      if (data) {
        this.room.price = data.roomPrice;
        this.room.roomNumber = data.roomNumber;
      }
    })
  }

}
