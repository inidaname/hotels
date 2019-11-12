import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { ReportComponent } from './report/report.component';
import { StaffComponent } from './staff/staff.component';
import { AccountComponent } from './account/account.component';
import { RoomsComponent } from './rooms/rooms.component';

import { PathNotFoundComponent } from '@components/path-not-found/path-not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stock', component: StockComponent },
  { path: 'report', component: ReportComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'account', component: AccountComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
