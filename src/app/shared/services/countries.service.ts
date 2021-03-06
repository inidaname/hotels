import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject, asyncScheduler } from 'rxjs';

import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap, observeOn } from 'rxjs/operators';
import { State, SortDirection, SearchResult, ProductInfo } from '@shared/interface';
import { sort, matches } from '@shared/functions/sort.function';
import { ApiService } from './api.service';


@Injectable({ providedIn: 'root' })
export class CountryService {
  private products: BehaviorSubject<ProductInfo[]>;
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _products$ = new BehaviorSubject<any[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe, private api: ApiService) {
    this.products = new BehaviorSubject(null);

    this.api.getProduct().subscribe((products: ProductInfo[]) => {
      this.products.next(products);
    });

    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._products$.next(result.content);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get product$() { return this.products.asObservable(); }
  get products$() { return this._products$.asObservable(); }
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

  updateData() {
    return this.api.getProduct().subscribe((products: ProductInfo[]) => {
      this.products.next(products);
    });
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let content = sort(this.products.value, sortColumn, sortDirection);
    // 2. filter
    content = content.filter(country => matches(country, searchTerm, this.pipe));
    const total = content.length;

    // 3. paginate
    content = content.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ content, total });
  }
}
