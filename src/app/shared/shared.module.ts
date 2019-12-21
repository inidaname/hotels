import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PathNotFoundComponent } from '@components/path-not-found/path-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SortableDirective } from './directives/sortable.directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SortableComponent } from './components/sortable/sortable.component';
import { InventoryFormComponent } from './components/inventory-form/inventory-form.component';
import { RoomsTableComponent } from './components/rooms-table/rooms-table.component';
import { SideUserComponent } from './components/side-user/side-user.component';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { SalesLogComponent } from './components/sales-log/sales-log.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrinterComponent } from './components/printer/printer.component';


@NgModule({
  declarations: [
    PathNotFoundComponent,
    HeaderComponent,
    SideBarComponent,
    ProductFormComponent,
    SortableDirective,
    SortableComponent,
    InventoryFormComponent,
    RoomsTableComponent,
    SideUserComponent,
    StaffListComponent,
    MealListComponent,
    SalesLogComponent,
    FooterComponent,
    PrinterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    NgxSpinnerModule,
    FontAwesomeModule
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
    InventoryFormComponent,
    NgxSpinnerModule,
    SortableDirective,
    SortableComponent,
    RoomsTableComponent,
    SideUserComponent,
    StaffListComponent,
    MealListComponent,
    SalesLogComponent,
    FooterComponent,
    PrinterComponent
  ],
  providers: [DecimalPipe],
  entryComponents: [
    ProductFormComponent,
    InventoryFormComponent
  ]
})
export class SharedModule { }
