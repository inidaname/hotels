import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { PathNotFoundComponent } from '@components/path-not-found/path-not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'roomslist' },
  { path: 'roomslist', component: RoomListComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomServiceRoutingModule { }
