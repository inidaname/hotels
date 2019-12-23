import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  private currentDataSubject: BehaviorSubject<any>;
  public currentData: Observable<any>;

  constructor() {
    this.currentDataSubject = new BehaviorSubject<any>(null);
    this.currentData = this.currentDataSubject.asObservable();

  }
  // get getData() {return this.currentDataSubject.asObservable(); }

  setData(data: any): void {
    return this.currentDataSubject.next(data);
  }

  getData(): void {
    return this.currentDataSubject.value;
  }

}
