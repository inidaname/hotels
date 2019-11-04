import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListsComponent } from './product-lists/product-lists.component';
import { PathNotFoundComponent } from '@components/path-not-found/path-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductListsComponent, outlet: 'primary'},
  { path: 'products', component: ProductDetailsComponent, outlet: 'sameLet' },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointOfSalesRoutingModule { }
