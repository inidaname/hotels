export interface Room {
  roomNumber: number;
  roomStatus?: string;
  roomCondition: string;
  roomTypeId: RoomType;
}

export interface RoomType {
  roomPrice: number;
  roomType: string;
  roomDescription: string;
}

export interface RoomInfo extends Room {
  readonly _id?: string;
  readonly added_on: Date;
  readonly edited_on: Date;
}

export interface RoomData {
  data: RoomInfo;
  message: string;
}
