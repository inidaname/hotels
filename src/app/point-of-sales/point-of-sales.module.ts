import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { PointOfSalesRoutingModule } from './point-of-sales-routing.module';
import { ProductListsComponent } from './product-lists/product-lists.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductListsComponent,
    ProductDetailsComponent
  ],
  imports: [
    SharedModule,
    PointOfSalesRoutingModule
  ]
})
export class PointOfSalesModule { }
