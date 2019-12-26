import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PointOfSalesComponent } from './point-of-sales/point-of-sales.component';
import { AdminComponent } from './admin/admin.component';
import { RoomServiceComponent } from './room-service/room-service.component';
import { environment } from 'environments/environment';
import { ProfileComponent } from './profile/profile.component';
import { HeaderInterceptor } from './shared/interceptor/header.interceptor';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    HomeComponent,
    PointOfSalesComponent,
    RoomServiceComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [environment.api],
        blacklistedRoutes: [],
        headerName: 'authorization',
        throwNoTokenError: true
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
