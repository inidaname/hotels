import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInfo, SortEvent } from '@shared/interface';
import { SortableDirective } from '@directives/sortable.directive';
import { InventoryService } from '@services/inventory.service';
import { ApiService } from '@services/api.service';
import { StaffService } from '@services/staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  products: Observable<ProductInfo[] | ProductInfo>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  @Input() purpose: string;

  constructor(
    public service: StaffService,
    public inventory: InventoryService,
    private api: ApiService
  ) {
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.products = this.service.usersGet$;
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


  trackById(i, da) {
    console.log(da)
    return da._id
  }
}
