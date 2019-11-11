export interface Inventory {
}

export interface InventoryInfo extends Inventory {
  readonly _id?: string;
  readonly added_on: Date;
  readonly edited_on: Date;
}

export interface InventoryData {
  data: InventoryInfo;
  message: string;
}
