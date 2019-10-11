import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AccountingComponent } from './accounting/accounting.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'accounting', component: AccountingComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
