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

  constructor() { }

  setData(data: any): void {
    return this.currentDataSubject.next(data);
  }

  setRoom(data: any) {
    return this.currentRoomSubject.next(data);
  }

  getData(): void {
    return this.currentDataSubject.value;
  }

  getRoom(): void {
    return this.currentRoomSubject.value;
  }
}
