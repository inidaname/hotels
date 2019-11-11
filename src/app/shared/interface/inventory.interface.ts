export interface Inventory {
  readonly stockName: string;
  readonly description: string;
  readonly quantity: number;
  readonly department: string;
  readonly condition: string;
  readonly serialNumber: string;
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
