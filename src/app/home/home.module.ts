import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { StockComponent } from './stock/stock.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AccountsComponent } from './accounts/accounts.component';


@NgModule({
  declarations: [StockComponent, RoomsComponent, AccountsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
