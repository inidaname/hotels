import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from '@shared/path-not-found/path-not-found.component';
import { FrontdeskComponent } from './frontdesk/frontdesk.component';
import { HotelServicesComponent } from './hotel-services/hotel-services.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/dashboard'
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'frontdesk',
    component: FrontdeskComponent,
    loadChildren: () => import('./frontdesk/frontdesk.module').then(m => m.FrontdeskModule)
  },
  {
    path: 'hotelServices',
    component: HotelServicesComponent,
    loadChildren: () => import('./hotel-services/hotel-services.module').then(m => m.HotelServicesModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
