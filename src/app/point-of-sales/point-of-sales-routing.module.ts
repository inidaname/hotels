import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListsComponent } from './product-lists/product-lists.component';
import { PathNotFoundComponent } from '../shared/components/path-not-found/path-not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vipbar' },
  { path: 'vipbar', component: ProductListsComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'poolbar', component: ProductDetailsComponent },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointOfSalesRoutingModule { }
