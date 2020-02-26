import { ProductInfo } from './products.interface';
import { RestaurantInfo } from './restaurant.interface';

export interface SalesInterface {
  _id: string;
  sellerId: string;
  productSold: ProductSold[];
  amountPaid: number;
  paymentMethod: string;
  complimentVal: string;
  place: string;
  receipt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductSold {
  _id: string;
  productDetail: ProductInfo & RestaurantInfo;
  productQuantity: number;
}
