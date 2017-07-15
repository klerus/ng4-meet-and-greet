import { Component, OnInit } from '@angular/core';

export class Product {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

export class ProductList {

  list: Array<Product> = [];

  addProduct(productItem: Product) {
    this.list.push(productItem)
  };
}

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {

  testProduct: Product = {
    title: 'This is simple product',
    price: 500.00,
  };
  testList: ProductList;

  constructor() {
    this.testList = new ProductList();
    this.testList.addProduct(new Product('Product number ONE', 2000.00))
    this.testList.addProduct(new Product('Product number TWO', 1200.50))
    this.testList.addProduct(new Product('Product number THREE', 300.30))
  }

  ngOnInit() {
  }
}
