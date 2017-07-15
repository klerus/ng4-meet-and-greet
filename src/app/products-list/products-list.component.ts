import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public products: Array<object> = [
    {
      name: 'Coffee',
      price: 5.99,
      promoted: false
    }, {
      name: 'Tea',
      price: 3.50,
      promoted: false
    }, {
      name: 'Burger',
      price: 19.99,
      promoted: true
    }
  ];

}
