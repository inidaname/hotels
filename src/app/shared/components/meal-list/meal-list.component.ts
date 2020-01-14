import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  AfterViewChecked
} from '@angular/core';
import { SortEvent } from '../../interface/sort.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';
import { SortableDirective } from '../../directives/sortable.directive';
import { Observable } from 'rxjs';
import { MealService } from '../../services/meal.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit, AfterViewChecked {
  products: Observable<any>;
  total$: Observable<number>;
  updateProduct: FormGroup;
  dataEdit: any;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  @Input() purpose: string;
  @Input() sett: boolean;

  constructor(
    private modal: NgbModal,
    public service: MealService,
    private fb: FormBuilder,
    private api: ApiService,
    private spinner: NgxSpinnerService
  ) {
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.products = this.service.products$;
    this.updateProduct = this.fb.group({
      mealName: [''],
      mealPrice: [''],
      mealDescription: ['']
    });
  }

  ngAfterViewChecked() {
    if (this.sett === true) {
      this.service.updateProd();
      this.products = this.service.products$;
      this.sett = false;
    }
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

  updateData(id: string, data) {
    this.spinner.show();
    if (this.updateProduct.touched) {
      if (this.updateProduct.controls.mealName.value === '') {
        this.updateProduct.controls.mealName.setValue(data.mealName);
      }

      if (this.updateProduct.controls.mealPrice.value === '') {
        this.updateProduct.controls.mealPrice.setValue(data.mealPrice);
      }

      if (this.updateProduct.controls.mealDescription.value === '') {
        this.updateProduct.controls.mealDescription.setValue(data.mealDescription);
      }

      this.api.updateMeal(id, this.updateProduct.value).subscribe((dat) => {
        // this.service.updateData();
        this.spinner.hide();
        this.dataEdit = dat.data;
      });
    }
  }

  edit(content, data) {
    this.dataEdit = data;
    const newModal = this.modal.open(content);
  }

  trackById(i, da) {
    console.log(da);
    return da._id;
  }

  clearData(){
    this.dataEdit = null;
    this.modal.dismissAll();
  }
}
