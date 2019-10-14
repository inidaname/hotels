import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AccountingComponent } from './accounting/accounting.component';
import { SettingsComponent } from './settings/settings.component';
import { SignoutComponent } from './signout/signout.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    RestaurantComponent,
    BookingsComponent,
    AccountingComponent,
    SettingsComponent,
    SignoutComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
