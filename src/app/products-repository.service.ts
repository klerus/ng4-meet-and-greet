import { Injectable } from '@angular/core';
import * as data from './data.json';

@Injectable()
export class ProductsRepositoryService {

  products = [];
  private _filterQuery: string;
  private _orderKey: string;
  private _orderAscending: boolean;

  constructor () {
    this._filterQuery = '';
    this._orderKey = '';
    this._orderAscending = false;

    this.products = (<any>Object).values(data);
  }

  get orderKey(): string {
    return this._orderKey;
  }
  set orderKey(value: string) {
    this._orderKey = value;
  }

  get orderAscending(): boolean {
    return this._orderAscending;
  }

  set orderAscending(value: boolean) {
    this._orderAscending = value;
  }

  set filterQuery(value: string) {
    this._filterQuery = value;
  }
  get filterQuery(): string {
    return this._filterQuery;
  }

  public getProducts() {
    return this.sort(this.filter(data))
  }

  private filter (products) {

    return products.filter((item) => {
      return Object.keys(item).map((key) => {
        if (item[key] !== null) {
          return item[key].toString().toLowerCase().indexOf(this.filterQuery.toLowerCase()) >= 0
        }
      }).reduce(function(previousValue, currentValue, index, array) {
        return previousValue || currentValue;
      })
    })
  }

  private sort (products) {
    products = products.sort((a, b) => {
      const x = a[this.orderKey];
      const y = b[this.orderKey];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    if (!this.orderAscending) {
      products.reverse()
    }
    return products;
  }
}
