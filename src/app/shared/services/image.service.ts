import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private currentSubjectBehiavor: BehaviorSubject<any>;
  public currentData: Observable<any>;
  constructor() {
    this.currentSubjectBehiavor = new BehaviorSubject([]);
    this.currentData = this.currentSubjectBehiavor.asObservable();
  }

  setData(data) {
    this.currentSubjectBehiavor.next(data);
  }
}
