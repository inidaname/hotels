import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathNotFoundComponent } from '@shared/path-not-found/path-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { ManagementComponent } from './management/management.component';
import { RoomComponent } from './room/room.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'stocks', component: StockComponent },
  { path: 'rooms', component: RoomComponent },
  { path: 'report', component: ReportComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
