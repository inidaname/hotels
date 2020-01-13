export interface Products {
  readonly productName: string;
  readonly name?: string;
  readonly productType: string;
  readonly productDept: string;
  readonly productImage: string;
  readonly mainBarPrice: number;
  readonly poolBarPrice: number;
  readonly serialNumber: string;
  readonly manufacturer: string;
  readonly quantity: number;
  readonly manufacturedDate: Date;
  readonly expiryDate: Date;
}

export interface ProductInfo extends Products {
  readonly _id?: string;
  readonly added_on: Date;
  readonly edited_on: Date;
}

export interface ProductData {
  data: ProductInfo;
  message: string;
}
