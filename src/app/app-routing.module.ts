import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateGuard } from '@shared/guards/authenticate.guard';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from '@components/path-not-found/path-not-found.component';
import { PointOfSalesComponent } from './point-of-sales/point-of-sales.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth'
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [AuthenticateGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthenticateGuard]
  },
  {
    path: 'pointofsales',
    component: PointOfSalesComponent,
    loadChildren: () => import('./point-of-sales/point-of-sales.module').then(m => m.PointOfSalesModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PathNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
