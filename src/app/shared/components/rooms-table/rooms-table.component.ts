import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInfo, SortEvent } from '@shared/interface';
import { SortableDirective } from '@directives/sortable.directive';
import { ProductFormComponent } from '@components/product-form/product-form.component';
import { InventoryFormComponent } from '@components/inventory-form/inventory-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from '@services/countries.service';
import { InventoryService } from '@services/inventory.service';
import { ApiService } from '@services/api.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.scss'],
  providers: [CountryService, DecimalPipe]
})
export class RoomsTableComponent implements OnInit {

  products: Observable<ProductInfo[] | ProductInfo>;
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
      console.log(this.purpose);
      this.component = (this.purpose === 'product') ? ProductFormComponent : InventoryFormComponent;
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
