import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '@services/countries.service';
import { RoomsService } from '@services/rooms.service';

@Component({
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit {

  productsList;
  cartProd: any[];
  @ViewChild('quantity', {static: true}) quantity;

  constructor(
    private products: CountryService,
    private productService: RoomsService
  ) {
    this.cartProd = [];
  }

  ngOnInit() {
    this.productsList = this.products.product$;
    console.log(this.quantity);
  }

  setProduct(set) {
    this.cartProd.push(set);
    this.productService.setProduct(this.cartProd);
  }

}
