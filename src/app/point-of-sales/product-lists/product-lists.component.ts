import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '@services/countries.service';
import { RoomsService } from '@services/rooms.service';

@Component({
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit {

  productsList;
  cartProd: {product: any, quantity: number}[];
  @ViewChild('quantity', {static: true}) quantity;

  constructor(
    private products: CountryService,
    private productService: RoomsService
  ) {
    this.cartProd = [];
  }

  ngOnInit() {
    this.productsList = this.products.product$;
  }

  setProduct(set, ctr) {
    const index = this.cartProd.findIndex(val => val.product._id === set._id);
    if (index >= 0) {
      this.cartProd[index].quantity = ctr;
    } else {
      this.cartProd.push({product: set, quantity: ctr});
    }
    this.productService.setProduct(this.cartProd);
  }

}
