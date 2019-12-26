import { Component, OnInit, ViewChildren, QueryList, Input, OnChanges } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SortableDirective } from '../../directives/sortable.directive';
import { ProductFormComponent } from '../product-form/product-form.component';
import { InventoryFormComponent } from '../inventory-form/inventory-form.component';
import { Observable } from 'rxjs';
import { ProductInfo } from '../../interface/products.interface';
import { SortEvent } from '../../interface/sort.interface';
import { ApiService } from '../../services/api.service';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-sort',
  templateUrl: './inventory-sort.component.html',
  styleUrls: ['./inventory-sort.component.scss'],
  providers: [InventoryService, DecimalPipe]
})
export class InventorySortComponent implements OnInit {

  products: Observable<any>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  @Input() purpose: string;
  component: typeof ProductFormComponent | typeof InventoryFormComponent;

  constructor(
    private modal: NgbModal,
    public service: InventoryService,
    private api: ApiService
    ) {
      this.total$ = service.total$;
    }

    ngOnInit() {
      this.component = (this.purpose === 'product') ? ProductFormComponent : InventoryFormComponent;
      this.products = this.service.inventories$;
  }

  openModal() {
    const newModal = this.modal.open(this.component);
    newModal.componentInstance.name = 'Get';
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

  trackById(i, da) {
    console.log(da);
    return da._id;
  }

}
