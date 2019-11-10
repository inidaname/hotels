import { PipeTransform } from '@angular/core';
import { ProductInfo } from '@shared/interface';

export function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

export function sort(countries: ProductInfo[], column: string, direction: string): any[] {
  if (direction === '') {
    return countries;
  } else {
    return [...countries].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

export function matches(country: ProductInfo, term: string, pipe: PipeTransform) {
  return country.productName.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(country.quantity).includes(term)
    || country.manufacturer.toLowerCase().includes(term.toLowerCase())
}
