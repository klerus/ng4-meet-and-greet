import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
