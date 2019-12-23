export interface Inventory {
  readonly name: string;
  readonly description: string;
  readonly quantity: number;
  readonly manufacturer: string;
  readonly image?: string;
  readonly valuePrice: number;
}

export interface InventoryInfo extends Inventory {
  readonly _id?: string;
  readonly createdAt: Date;
  readonly updateAt: Date;
}

export interface InventoryData {
  data: InventoryInfo;
  message: string;
}
