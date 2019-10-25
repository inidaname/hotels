import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rooms' },
  { path: 'rooms', component: RoomsComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'detail' },
    { path: 'detial', component: RoomDetailsComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelServicesRoutingModule { }
