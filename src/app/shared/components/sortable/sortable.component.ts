import { Component, OnInit, ViewChildren, QueryList, Input, OnChanges } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SortableDirective } from '@directives/sortable.directive';
import { ProductFormComponent } from '@components/product-form/product-form.component';
import { InventoryFormComponent } from '@components/inventory-form/inventory-form.component';
import { CountryService } from '@services/countries.service';
import { Observable } from 'rxjs';
import { ProductInfo, SortEvent } from '@shared/interface';
import { ApiService } from '@services/api.service';
import { InventoryService } from '@services/inventory.service';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss'],
  providers: [CountryService, DecimalPipe]
})
export class SortableComponent implements OnInit {

  products: Observable<any>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  @Input() purpose: string;
  component: typeof ProductFormComponent | typeof InventoryFormComponent;

  constructor(
    private modal: NgbModal,
    public service: CountryService,
    public inventory: InventoryService,
    private api: ApiService
    ) {
      this.total$ = service.total$;
    }

    ngOnInit() {
      this.component = (this.purpose === 'product') ? ProductFormComponent : InventoryFormComponent;
      this.products = (this.purpose === 'product') ? this.service.product$ : this.inventory.inventory$;
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

  justOpen(id: ProductInfo){
    const newModal = this.modal.open(ProductFormComponent);
    newModal.componentInstance.name = 'Get';
    newModal.componentInstance.product = id;
    newModal.componentInstance.productHere = true;
  }

  trackById(i, da) {
    console.log(da)
    return da._id
  }
}
