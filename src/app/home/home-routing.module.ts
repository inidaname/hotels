import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathNotFoundComponent } from '../shared/components/path-not-found/path-not-found.component';
import { StockComponent } from './stock/stock.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AccountsComponent } from './accounts/accounts.component';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'rooms'
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
