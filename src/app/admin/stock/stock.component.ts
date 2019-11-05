import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from '@components/product-form/product-form.component';

@Component({
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {


  constructor(
    private modal: NgbModal
  ) {
  }

  ngOnInit() {
  }

  openModal() {
    const newModal = this.modal.open(ProductFormComponent);
    newModal.componentInstance.name = 'Get';
  }

}
