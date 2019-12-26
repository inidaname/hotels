import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private currentDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentData: Observable<any> = this.currentDataSubject.asObservable();

  private currentRoomSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentRoom: Observable<any> = this.currentRoomSubject.asObservable();

  private currentProductSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentProduct: Observable<any> = this.currentProductSubject.asObservable();

  private currentProductSold: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentSold: Observable<any> = this.currentProductSold.asObservable();

  private currentReservationBeh: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentReservation: Observable<any> = this.currentReservationBeh.asObservable();

  private currentSendSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentSend: Observable<any> = this.currentSendSubject.asObservable();

  private currentPriceSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public price: Observable<any> = this.currentPriceSubject.asObservable();


  constructor() { }

  setThePrice(price) {
    return this.currentPriceSubject.next(price);
  }

  sendRoom(data: any) {
    return this.currentSendSubject.next(data)
  }

  setData(data: any): void {
    return this.currentDataSubject.next(data);
  }

  setRoom(data: any) {
    return this.currentRoomSubject.next(data);
  }

  setReserve(data: any) {
    return this.currentReservationBeh.next(data);
  }

  setTotalPrice(data: any) {
    return this.currentProductSold.next(data);
  }

  getTotalPrice() {
    return this.currentProductSold.value;
  }

  setProduct(data: any) {
    return this.currentProductSubject.next(data);
  }

  getProduct() {
    return this.currentProductSubject.value;
  }

  getData(): void {
    return this.currentDataSubject.value;
  }

  getRoom(): void {
    return this.currentRoomSubject.value;
  }
}
