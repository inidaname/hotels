import { Component, OnInit, ViewChildren, QueryList, Input, OnChanges } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SortableDirective } from '../../directives/sortable.directive';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { InventoryFormComponent } from '../../components/inventory-form/inventory-form.component';
import { CountryService } from '../../services/countries.service';
import { Observable } from 'rxjs';
import { ProductInfo } from '../../interface/products.interface';
import { SortEvent } from '../../interface/sort.interface';
import { ApiService } from '../../services/api.service';
import { InventoryService } from '../../services/inventory.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss'],
  providers: [CountryService, DecimalPipe]
})
export class SortableComponent implements OnInit {

  products: Observable<any>;
  total$: Observable<number>;
  updateProduct: FormGroup;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  @Input() purpose: string;
  component: typeof ProductFormComponent | typeof InventoryFormComponent;
  dataEdit: ProductInfo;

  constructor(
    private modal: NgbModal,
    public service: CountryService,
    public inventory: InventoryService,
    private api: ApiService,
    private fb: FormBuilder
    ) {
    }

    ngOnInit() {
      this.component = (this.purpose === 'product') ? ProductFormComponent : InventoryFormComponent;
      this.products = (this.purpose === 'product') ? this.service.products$ : this.inventory.inventories$;
      this.total$ = (this.purpose === 'product') ? this.service.total$ : this.inventory.total$;

      this.updateProduct = this.fb.group({
        name: [''],
        poolBarPrice: [''],
        mainBarPrice: [''],
        manufacturer: [''],
        quantity: ['']
      });
  }

  openModal() {
    const newModal = this.modal.open(this.component);
    newModal.componentInstance.name = 'Get';
  }

  edit(content, data: ProductInfo) {
    this.dataEdit = data;
    const newModal = this.modal.open(content);
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  justOpen(id: ProductInfo) {
    const newModal = this.modal.open(ProductFormComponent);
    newModal.componentInstance.name = 'Get';
    newModal.componentInstance.product = id;
    newModal.componentInstance.productHere = true;
  }

  updateData(id: string, data: ProductInfo) {
    this.updateProduct.controls = (!this.updateProduct.controls.name.touched) ?
        this.updateProduct.controls.name.setValue(data.name)
     :  this.updateProduct.controls.name.value;
    this.updateProduct.controls = (!this.updateProduct.controls.poolBarPrice.touched) ?
        this.updateProduct.controls.poolBarPrice.setValue(data.poolBarPrice)
     :  this.updateProduct.controls.poolBarPrice.value;
    this.updateProduct.controls = (!this.updateProduct.controls.mainBarPrice.touched) ?
        this.updateProduct.controls.mainBarPrice.setValue(data.mainBarPrice)
     :  this.updateProduct.controls.mainBarPrice.value;
    this.updateProduct.controls = (!this.updateProduct.controls.manufacturer.touched) ?
        this.updateProduct.controls.manufacturer.setValue(data.manufacturer)
     :  this.updateProduct.controls.manufacturer.value;
    this.updateProduct.controls = (!this.updateProduct.controls.quantity.touched) ?
        this.updateProduct.controls.quantity.setValue(data.quantity)
     :  this.updateProduct.controls.quantity.value;
    console.log(this.updateProduct.value)
  }

  trackById(i, da) {
    console.log(da);
    return da._id;
  }
}
