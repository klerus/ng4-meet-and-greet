import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products: Product[] = [];
  public filteredProducts: Product[] = [];
  public searchInput = new FormControl();

  public sort (button) {
    this.filteredProducts.sort(function (a,b) {
      return a.price - b.price;
    };
  }

  constructor() {
    this.searchInput.valueChanges.subscribe(value => this.filteredProducts = this.products.filter(
      product => product.has(value.toLowerCase()))
  );

    this.products.push(new Product('Coffee', 5.99, false));
    this.products.push(new Product('Tea', 2.99, false));
    this.products.push(new Product('Burger', 15.99, true));
    this.products.push(new Product('Pizza', 30.99, true));
    this.products.push(new Product('Tiger', 2.99, true));
    this.filteredProducts = this.products;
  }

  ngOnInit() {}
}

class Product {
  name: string;
  price: number;
  promoted: boolean;
  imgURL: string;

  constructor(name, price, promoted) {
    this.name = name;
    this.price = price;
    this.promoted = promoted;
    this.imgURL = 'https://dummyimage.com/318x200/000/fff';
  }
  public has(value: string) {
    return _.some(_.map([this.name, this.price], function (n) {
      return n.toString().toLowerCase().indexOf(value) >= 0;
    }));
  }
}
