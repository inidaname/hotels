export interface Room {
  roomName: string;
  roomNumber: number;
  roomType: string;
  roomDescription: string;
  roomStatus: string;
  roomCondition: string;
  roomPrice: number;
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
