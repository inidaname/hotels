import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontdeskRoutingModule } from './frontdesk-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    FrontdeskRoutingModule,
    SharedModule
  ]
})
export class FrontdeskModule { }
