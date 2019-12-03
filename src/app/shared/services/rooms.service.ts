import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private currentDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentData: Observable<any> = this.currentDataSubject.asObservable();

  constructor() { }

  setData(data: any): void {
    return this.currentDataSubject.next(data);
  }

  getData(): void {
    return this.currentDataSubject.value;
  }
}
