import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SortableDirective, SortEvent } from '@directives/sortable.directive';
import { ProductFormComponent } from '@components/product-form/product-form.component';
import { CountryService } from '@services/countries.service';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';

@Component({
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  providers: [CountryService, DecimalPipe]
})
export class StockComponent implements OnInit {

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  countries$: Observable<any[]>;
  total$: Observable<number>;

  constructor(
    private modal: NgbModal,
    public service: CountryService
  ) {}

  ngOnInit() {
    // this.openModal();
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

}
