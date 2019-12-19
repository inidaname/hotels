import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SortableDirective } from '@directives/sortable.directive';
import { AdminApiService } from '@services/admin-api.service';
import { SortEvent } from '@shared/interface';
import { AdminSalesService } from '@services/admin-sales.service';

@Component({
  selector: 'app-sales-log',
  templateUrl: './sales-log.component.html',
  styleUrls: ['./sales-log.component.scss']
})
export class SalesLogComponent implements OnInit {
  sales: Observable<any>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  @Input() purpose: string;
  soldProduct: any[];

  constructor(
    public service: AdminSalesService,
    private api: AdminApiService
  ) {
    this.total$ = service.total$;
    this.soldProduct = [];
    this.sales = this.service.roomsGet$;

    if (this.purpose === 'sales') {
      this.sales = this.service.salesGet$;
     } else if (this.purpose === 'restaurant') {
      this.sales = this.service.mealsGet$;
     } else {
       this.sales = this.service.roomsGet$;
     }

  }

  ngOnInit() {
    this.sales.subscribe((er: any[]) => {
      console.log(er, this.purpose)
      if (er.length > 0) {
        for (let i = 0; i < er.length; i++) {
          const element = er[i];
          let wt = element.productSold.reduce((a, b) => a + b.productQuantity, 0)
          this.soldProduct.push(wt);
        }
      }
    });

  }

  onSort({ column, direction }: SortEvent) {
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
