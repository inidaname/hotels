import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SortableDirective } from '@directives/sortable.directive';
import { ProductFormComponent } from '@components/product-form/product-form.component';
import { CountryService } from '@services/countries.service';
import { Observable } from 'rxjs';
import { ProductInfo, SortEvent } from '@shared/interface';
import { ApiService } from '@services/api.service';

@Component({
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  providers: [CountryService, DecimalPipe]
})
export class StockComponent implements OnInit {

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  products: Observable<ProductInfo[] | ProductInfo>;
  total$: Observable<number>;

  constructor(
    private modal: NgbModal,
    public service: CountryService,
    private api: ApiService
  ) {
    this.products = service.countries$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // this.openModal();
    this.products = this.api.getProduct();
  }

  openModal() {
    const newModal = this.modal.open(ProductFormComponent);
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
