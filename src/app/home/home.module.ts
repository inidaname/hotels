import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AccountingComponent } from './accounting/accounting.component';
import { SettingsComponent } from './settings/settings.component';
import { SignoutComponent } from './signout/signout.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    RestaurantComponent,
    BookingsComponent,
    AccountingComponent,
    SettingsComponent,
    SignoutComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
