import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { State, SortDirection, SearchResult } from '@shared/interface';
import { DecimalPipe } from '@angular/common';
import { AdminApiService } from './admin-api.service';
import { tap, debounceTime, switchMap, delay } from 'rxjs/operators';
import { sort, matches } from '@shared/functions/sort.function';

@Injectable({
  providedIn: 'root'
})
export class AdminSalesService {

  private sales: BehaviorSubject<any[]>;
  private meals: BehaviorSubject<any[]>;
  private rooms: BehaviorSubject<any[]>;
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private sales$ = new BehaviorSubject<any[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe, private api: AdminApiService) {

    this.sales = new BehaviorSubject<any[]>([]);
    this.meals = new BehaviorSubject<any[]>([]);
    this.rooms = new BehaviorSubject<any[]>([]);

    this.api.getAccounts().subscribe((sales: any[]) => {
      this.sales.next(sales);
    });

    this.api.getRestaurant().subscribe((meals: any[]) => {
      this.meals.next(meals);
    });

    this.api.getRooms().subscribe((rooms: any[]) => {
      this.rooms.next(rooms);
    });

    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this.sales$.next(result.content);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get salesGet$() { return this.sales.asObservable(); }
  get mealsGet$() { return this.meals.asObservable(); }
  get roomsGet$() { return this.rooms.asObservable(); }
  get products$() { return this.sales$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({ page }); }
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: string) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let content = sort(this.sales.value, sortColumn, sortDirection);
    // 2. filter
    content = content.filter(country => matches(country, searchTerm, this.pipe));
    const total = content.length;

    // 3. paginate
    content = content.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ content, total });
  }

}
