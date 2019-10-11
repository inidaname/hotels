import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'home', component: HomeComponent, loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
