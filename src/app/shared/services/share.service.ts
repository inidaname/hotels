import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private currentStatusSubject: BehaviorSubject<boolean>;
  public currentStatus: Observable<boolean>;

  constructor() {
    this.currentStatusSubject = new BehaviorSubject<boolean>(false);
    this.currentStatus = this.currentStatusSubject.asObservable();
  }

  public currentLoadStatus(): boolean {
    return this.currentStatusSubject.value;
  }

  public changeValueOfStatus(status: boolean) {
    return this.currentStatusSubject.next(status);
  }
}
