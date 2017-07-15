import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  products =  [
    {
      name: 'Product 1',
      price: 12.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://lorempixel.com/350/200/food/1/'
    },
    {
      name: 'Product 2',
      price: 13.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://lorempixel.com/350/200/food/2/',
      featured: true
    },
    {
      name: 'Product 3',
      price: 13.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://lorempixel.com/350/200/food/3/',
      featured: true
    },
    {
      name: 'Product 4',
      price: 42.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://lorempixel.com/350/200/food/4/'
    },
    {
      name: 'Product 5',
      price: 53.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://lorempixel.com/350/200/food/5/'
    },
    {
      name: 'Product 6',
      price: 62.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://lorempixel.com/350/200/food/6/'
    },
    {
      name: 'Product 7',
      price: 73.0,
      description: 'Lorem ipsum dolor sit amet, ...',
      imgUrl: 'http://lorempixel.com/350/200/food/7/',
      featured: true
    }
  ]
}
