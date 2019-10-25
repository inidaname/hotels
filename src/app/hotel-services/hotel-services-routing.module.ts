import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { GuestsComponent } from './guests/guests.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rooms' },
  {
    path: 'rooms', component: RoomsComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'detail' },
      { path: 'detial', component: RoomDetailsComponent }
    ]
  },
  { path: 'guests', component: GuestsComponent, children: [
    { path: '',  }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelServicesRoutingModule { }
