import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { GuestsComponent } from './guests/guests.component';
import { GuestComponent } from './guests/guest/guest.component';
import { PathNotFoundComponent } from '@shared/path-not-found/path-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'rooms' },
  {
    path: 'rooms', component: RoomsComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'detail' },
      { path: 'detial', component: RoomDetailsComponent },
      { path: '**', component: PathNotFoundComponent }
    ]
  },
  {
    path: 'guests', component: GuestsComponent, children: [
      { path: 'guest', component: GuestComponent },
      { path: '**', component: PathNotFoundComponent }
    ]
  },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelServicesRoutingModule { }
