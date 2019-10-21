import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor, JwtInterceptor } from './interceptor';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TopHighlightComponent } from './components/top-highlight/top-highlight.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StaffTableComponent } from './components/staff-table/staff-table.component';
import { RoomsTableComponent } from './components/rooms-table/rooms-table.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TopHighlightComponent,
    PathNotFoundComponent,
    ProductDetailComponent,
    StaffTableComponent,
    RoomsTableComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    TopHighlightComponent,
    FontAwesomeModule,
    ProductDetailComponent,
    StaffTableComponent,
    RoomsTableComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})
export class SharedModule { }
