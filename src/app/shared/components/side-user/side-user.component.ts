import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
import { RoomsService } from '@services/rooms.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-user',
  templateUrl: './side-user.component.html',
  styleUrls: ['./side-user.component.scss']
})
export class SideUserComponent implements OnInit, AfterViewChecked {

  faPlus = faPlus;
  faMinus = faMinus;
  data: any = {};
  room: any = {};
  @Input() purpose: string;
  product: any = [];

  constructor(
    private roomService: RoomsService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (this.purpose === 'roomservice') {
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
      });
    }


    this.roomService.getProduct().subscribe(da => {
      if (da) {
        this.product = da;
        console.log(da)
      }
    })
  }

}
