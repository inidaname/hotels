import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { SortEvent } from '@shared/interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '@services/api.service';
import { SortableDirective } from '@directives/sortable.directive';
import { Observable } from 'rxjs';
import { MealService } from '@services/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {


  products: Observable<any>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  @Input() purpose: string;

  constructor(
    private modal: NgbModal,
    public service: MealService,
    private api: ApiService
    ) {
      this.total$ = service.total$;
    }

    ngOnInit() {
      this.products = (this.purpose === 'inventory') ? this.service.mealsGet$ : this.service.mealsGet$
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


  trackById(i, da) {
    console.log(da)
    return da._id
  }

}
