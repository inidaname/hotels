import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { PathNotFoundComponent } from '@components/path-not-found/path-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductFormComponent } from './components/product-form/product-form.component';


@NgModule({
  declarations: [
    PathNotFoundComponent,
    HeaderComponent,
    SideBarComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    PathNotFoundComponent,
    HeaderComponent,
    SideBarComponent,
    ProductFormComponent
  ]
})
export class SharedModule { }
