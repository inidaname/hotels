import { RoomInfo } from './room.interface';
import { User } from './user.interface';

export interface CustomerInterface {
  _id: string;
  customerName: string;
  city: string;
  country: string;
  customerEmail: string;
  customerProfession: string;
  customerAddress: string;
  customerNumber: string;
  nationality: string;
  issuedAt: string;
  companyName: string;
  companyNumber: string;
  companyAddress: string;
  nextOfKin: string;
  nextOfKinNumber: string;
  nextOfKinRelation: string;
  image: string[];
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface RoomLodge {
  _id: string;
  image: string[];
  checkedInStatus: string;
  discount: boolean;
  amountPaid: number;
  numberOfPersons: number;
  purposeOfVisit: string;
  paymentMethod: string;
  arrivalDate: string;
  departureDate: string;
  comingFrom: string;
  nextDestination: string;
  room: RoomInfo;
  roomNumber: string;
  checkedInBy: User
  customer: CustomerInterface;
  receipt: string;
  createdAt: string;
  updatedAt: string;
}
