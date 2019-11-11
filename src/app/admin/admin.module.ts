import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { ReportComponent } from './report/report.component';
import { StaffComponent } from './staff/staff.component';
import { AccountComponent } from './account/account.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsRestaurantComponent } from './rooms-restaurant/rooms-restaurant.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StockComponent,
    ReportComponent,
    StaffComponent,
    AccountComponent,
    RoomsRestaurantComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    // NgbPaginationModule
  ]
})
export class AdminModule { }
