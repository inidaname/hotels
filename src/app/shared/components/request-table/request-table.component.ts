import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { SortableDirective } from '@directives/sortable.directive';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestService } from '@services/request.service';
import { InventoryService } from '@services/inventory.service';
import { ApiService } from '@services/api.service';
import { SortEvent, ProductInfo } from '@shared/interface';
import { ProductFormComponent } from '@components/product-form/product-form.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.scss']
})
export class RequestTableComponent implements OnInit {

  checkUser: boolean;
  products: Observable<any>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  @Input() purpose: string;

  constructor(
    private jwt: JwtHelperService,
    private modal: NgbModal,
    public service: RequestService,
    public inventory: InventoryService,
    private api: ApiService,
    private spinner: NgxSpinnerService

  ) {
    if (this.jwt.decodeToken().userType === 'superadmin'){
      this.checkUser = true;
      this.total$ = service.total$;
    }
  }

    ngOnInit() {
      this.products = this.service.request$;
  }

  approve(val) {
    val.status = 'approved';
    this.spinner.show()
    const ob = this.api.updateReq(val, val._id).subscribe(er => {
      if (er) {
        this.service.updateData();
      }
      ob.unsubscribe();
    })
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
