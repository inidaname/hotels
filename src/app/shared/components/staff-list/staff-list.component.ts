import { Component, OnInit, ViewChildren, QueryList, Input, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInfo, SortEvent } from '@shared/interface';
import { SortableDirective } from '@directives/sortable.directive';
import { ApiService } from '@services/api.service';
import { StaffService } from '@services/staff.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss'],
  providers: [StaffService]
})
export class StaffListComponent implements OnInit, AfterViewChecked {

  products: Observable<ProductInfo[] | ProductInfo>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  @Input() purpose: string;
  loggedInId: any;
  @Input() sett: boolean;

  constructor(
    public service?: StaffService,
    private api?: ApiService,
    private jwt?: JwtHelperService
  ) {
    this.total$ = service.total$;
    this.sett = false;
  }

  ngOnInit() {
    this.products = this.service.products$;
    this.loggedInId = this.jwt.decodeToken().userId;
  }

  ngAfterViewChecked() {
    if (this.sett === true) {
      this.service.updateUser();
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



  userDelete(id) {
    this.api.deleteUser(id).subscribe(de => {
      if (de) {
        this.service.updateUser();
        this.products = this.service.products$;
      }
    })
  }


  trackById(i, da) {
    console.log(da)
    return da._id
  }
}
