import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbAlertModule, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PathNotFoundComponent } from '@components/path-not-found/path-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SortableDirective } from './directives/sortable.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SortableComponent } from './components/sortable/sortable.component';


@NgModule({
  declarations: [
    PathNotFoundComponent,
    HeaderComponent,
    SideBarComponent,
    ProductFormComponent,
    SortableDirective,
    SortableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    NgxSpinnerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PathNotFoundComponent,
    HeaderComponent,
    SideBarComponent,
    ProductFormComponent,
    NgxSpinnerModule,
    SortableDirective,
    SortableComponent
  ],
  entryComponents: [ProductFormComponent]
})
export class SharedModule { }
