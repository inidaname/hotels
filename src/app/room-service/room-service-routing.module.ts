import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomListComponent } from './room-list/room-list.component';
import { OtherServiceComponent } from './other-service/other-service.component';
import { PathNotFoundComponent } from '../shared/components/path-not-found/path-not-found.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchCheckoutComponent } from './search-checkout/search-checkout.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'search', component: SearchCheckoutComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'roomslist', component: RoomListComponent },
  { path: 'otherservice', component: OtherServiceComponent },
  { path: 'otherservice/:id', component: OtherServiceComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomServiceRoutingModule { }
