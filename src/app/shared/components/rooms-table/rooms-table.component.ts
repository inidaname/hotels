import { Component, OnInit, ViewChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { SortEvent, RoomInfo } from '@shared/interface';
import { SortableDirective } from '@directives/sortable.directive';
import { ProductFormComponent } from '@components/product-form/product-form.component';
import { InventoryFormComponent } from '@components/inventory-form/inventory-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '@services/api.service';
import { DecimalPipe } from '@angular/common';
import { RoomService } from '@services/room.service';

@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.scss'],
  providers: [RoomService, DecimalPipe]
})
export class RoomsTableComponent implements OnInit {

  rooms: Observable<RoomInfo[] | RoomInfo>;
  total$: Observable<number>;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;
  @Output() tapRoom = new EventEmitter<any>();

  @Input() purpose: string;
  component: typeof ProductFormComponent | typeof InventoryFormComponent;

  constructor(
    private modal: NgbModal,
    public service: RoomService,
    private api: ApiService
  ) {
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.rooms = this.service.products$;
  }

  clickMe(value) {
    this.tapRoom.emit(value);
  }

  openModal() {
    const newModal = this.modal.open(this.component);
    newModal.componentInstance.name = 'Get';
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

  justOpen(id: RoomInfo) {
    const newModal = this.modal.open(ProductFormComponent);
    newModal.componentInstance.name = 'Get';
    // newModal.componentInstance.product = id;
    newModal.componentInstance.productHere = true;
  }

  trackById(i, da) {
    console.log(da);
    return da._id;
  }
}
