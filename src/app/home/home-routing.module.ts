import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathNotFoundComponent } from '@components/path-not-found/path-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
