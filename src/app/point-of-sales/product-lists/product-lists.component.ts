import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from '@services/countries.service';
import { RoomsService } from '@services/rooms.service';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnInit {

  productsList;
  cartProd: { product: any, quantity: number, place: string }[];
  @ViewChild('quantity', { static: true }) quantity;
  productSold: any;
  productArray: [];
  model: any;
  setMe: any;
  some: boolean;

  constructor(
    public products: CountryService,
    private productService: RoomsService,
    private api: ApiService
  ) {
    this.productArray = [];
    this.cartProd = [];
    this.productSold = [];
  }

  ngOnInit() {
    const getProducts = this.api.getProduct().subscribe((product: any) => {
      this.productArray = product;
      getProducts.unsubscribe();
    })
    this.productsList = this.products.products$;
    this.productService.setTotalPrice(null);
    this.productService.setProduct(null);
  }

  searchText = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.productArray.filter((v: any) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {name: string}) => x.name;

  setProduct(set, ctr) {
    const index = this.cartProd.findIndex(val => val.product._id === set._id);
    const ind = this.productSold.findIndex(val => val.productDetail === set._id);

    if (ind >= 0) {
      this.productSold[ind].productQuantity = ctr;
    } else {
      this.productSold.push({productDetail: set._id, productQuantity: ctr, place: 'mainBar'})
    }
    if (index >= 0) {
      this.cartProd[index].quantity = ctr;
    } else {
      this.cartProd.push({ product: set, quantity: ctr, place: 'mainBar' });
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
