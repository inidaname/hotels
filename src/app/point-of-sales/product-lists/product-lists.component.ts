import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '@services/countries.service';
import { RoomsService } from '@services/rooms.service';

@Component({
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit {

  productsList;
  cartProd: { product: any, quantity: number }[];
  @ViewChild('quantity', { static: true }) quantity;
  productSold: any;

  constructor(
    private products: CountryService,
    private productService: RoomsService
  ) {
    this.cartProd = [];
    this.productSold = [];
  }

  ngOnInit() {
    this.productsList = this.products.product$;
  }

  setProduct(set, ctr) {
    const index = this.cartProd.findIndex(val => val.product._id === set._id);
    const ind = this.productSold.findIndex(val => val.productDetail === set._id);

    if (ind >= 0) {
      this.productSold[ind].productQuantity = ctr;
    } else {
      this.productSold.push({productDetail: set._id, productQuantity: ctr})
    }
    if (index >= 0) {
      this.cartProd[index].quantity = ctr;
    } else {
      this.cartProd.push({ product: set, quantity: ctr });
    }
    this.productService.setTotalPrice(this.productSold);
    this.productService.setProduct(this.cartProd);
  }

  removeProduct(item, val) {
    const index = this.cartProd.findIndex(val => val.product._id === item._id);

    this.cartProd.splice(index, 1);
    this.productService.setProduct(this.cartProd);
  }

}
