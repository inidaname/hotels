import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  private currentDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentData: Observable<any> = this.currentDataSubject.asObservable();

  constructor() {
  }
  get getData() {return this.currentDataSubject.asObservable(); }

  setData(data: any): void {
    return this.currentDataSubject.next(data);
  }

}
