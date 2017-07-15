import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: [
    './products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products: Array<Product> = [];
  constructor() {
    this.products.push(new Product('Coffee', 5.99, false));
    this.products.push(new Product('Tea', 2.99, false));
    this.products.push(new Product('Burger', 15.99, true));
    this.products.push(new Product('Pizza', 30.99, true));
    this.products.push(new Product('Tiger', 2.99, true));
  }

  ngOnInit() {
  }
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
}


