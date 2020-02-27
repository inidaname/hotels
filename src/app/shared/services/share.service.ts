import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private currentStatusSubject: BehaviorSubject<boolean>;
  public currentStatus: Observable<boolean>;

  private currentDataSubject: BehaviorSubject<boolean>;
  public currentData: Observable<boolean>;

  constructor() {
    this.currentStatusSubject = new BehaviorSubject<boolean>(false);
    this.currentStatus = this.currentStatusSubject.asObservable();

    this.currentDataSubject = new BehaviorSubject<boolean>(false);
    this.currentData = this.currentDataSubject.asObservable();
  }

  public currentLoadStatus(): boolean {
    return this.currentStatusSubject.value;
  }

  public changeValueOfStatus(status: boolean) {
    return this.currentStatusSubject.next(status);
  }

  public changeData(data: boolean) {
    return this.currentDataSubject.next(data);
  }
}
