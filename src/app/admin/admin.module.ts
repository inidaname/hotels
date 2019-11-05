import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { ReportComponent } from './report/report.component';
import { StaffComponent } from './staff/staff.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StockComponent,
    ReportComponent,
    StaffComponent,
    AccountComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
