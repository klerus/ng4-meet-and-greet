import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products: Array<Product> = [];
  constructor() { }

  ngOnInit() {
    this.products.push(new Product('Coffee', 5.99, false));
    this.products.push(new Product('Tea', 2.99, false));
    this.products.push(new Product('Burger', 15.99, true));
  }
}

class Product {
  name: string;
  price: number;
  promoted: boolean;

  constructor(name: string, price: number, promoted: boolean) {
    this.name = name;
    this.price = price;
    this.promoted = promoted;
  }
}
