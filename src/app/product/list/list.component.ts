import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products = [
    {
      name: 'Product 1',
      price: 12.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://via.placeholder.com/350x150'
    },
    {
      name: 'Product 2',
      price: 12.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://via.placeholder.com/350x150'
    },
    {
      name: 'Product 3',
      price: 12.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://via.placeholder.com/350x150'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
