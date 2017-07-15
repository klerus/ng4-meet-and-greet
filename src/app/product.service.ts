import { InjectionToken } from '@angular/core';
import * as _ from 'lodash';
import has = Reflect.has;

export class Product {
  name: string;
  price: number;
  promoted: boolean;
  imgURL: string;

  constructor(name, price, promoted) {
    this.name = name;
    this.price = price;
    this.promoted = promoted;
    this.imgURL = 'https://dummyimage.com/318x150/000/fff';
  }
  public has(value: string) {
    return _.some(_.map([this.name, this.price], n => n.toString().toLowerCase().indexOf(value) >= 0));
  }
}

export interface ProductServiceInterface {
  getProducts(filter: string, keys: string[], orders: string[]): Product[];
}

export class ProductService implements ProductServiceInterface {
  products: Product[];
  constructor() {
    this.products = [
      new Product('Coffee', 5.99, false),
      new Product('Tea', 2.99, false),
      new Product('Burger', 15.99, true),
      new Product('Pizza', 30.99, true),
      new Product('Tiger', 2.99, true)
    ];
  }

  public getProducts (filter: string, keys: string[], orders: string[]): Product[] {
    const products = this.filter(this.products, filter);
    return this.order(products, keys, orders);

  }

  private filter (products: Product[], filterQuery: string): Product[] {
    return _.filter(products, function (product) {
      return product.has(filterQuery);
    });
  }

  private order (products: Product[], keys: string[], orders: string[]): Product[] {
    return _.orderBy(products, keys, orders);
  }
}

export const ProductServiceToken = new InjectionToken('ProductService');
