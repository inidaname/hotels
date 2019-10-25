import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelServicesRoutingModule } from './hotel-services-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { SharedModule } from '@shared/shared.module';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { GuestsComponent } from './guests/guests.component';
import { GuestComponent } from './guests/guest/guest.component';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomDetailsComponent,
    GuestsComponent,
    GuestComponent
  ],
  imports: [
    CommonModule,
    HotelServicesRoutingModule,
    SharedModule
  ]
})
export class HotelServicesModule { }
