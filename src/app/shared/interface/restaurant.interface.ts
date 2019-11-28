export interface Restaurant {
  mealName: string;
  mealType: string;
  mealNumber: number;
  mealDescription: string;
  mealPrice: number;
  mealImage: string;
}

export interface RestaurantInfo extends Restaurant {
  readonly _id?: string;
  readonly added_on: Date;
  readonly edited_on: Date;
}

export interface RestaurantData {
  message: string;
  data: RestaurantInfo;
}
