import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { RoomsService } from '@services/rooms.service';

@Component({
  selector: 'app-side-user',
  templateUrl: './side-user.component.html',
  styleUrls: ['./side-user.component.scss']
})
export class SideUserComponent implements OnInit, AfterViewChecked {

  data: any = {  };

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
        this.data.room = data.room;
        this.data.otherservice = data.otherservice;
        this.data.price = data.price;
      }
    });
  }

}
