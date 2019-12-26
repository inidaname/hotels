import { PipeTransform } from '@angular/core';
import { ProductInfo } from '../interface/products.interface';

export function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

export function sort(countries: any, column: string, direction: string): any[] {
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
  const values = Object.values(country);

  return values.map(f => {
    if (typeof f === 'number') {
     return pipe.transform(f).includes(term);
    } else if (typeof f === 'object') {
      return;
    }
    return f.toLowerCase().includes(term.toLowerCase());
  });
}
