import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  items: any[];
  @Input() name: string;

  constructor(
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
