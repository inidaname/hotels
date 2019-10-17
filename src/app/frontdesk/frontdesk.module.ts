import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontdeskRoutingModule } from './frontdesk-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { ProductDescriptionComponent } from './products/product-description/product-description.component';
import { ProductsHeaderComponent } from './products/products-header/products-header.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDescriptionComponent,
    ProductsHeaderComponent
  ],
  imports: [
    CommonModule,
    FrontdeskRoutingModule,
    SharedModule
  ]
})
export class FrontdeskModule { }
