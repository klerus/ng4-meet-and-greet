import { Component } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  products = [];

  constructor () {
    this.products = (<any>Object).values(data);
  }

  public filter (inputQuery) {
    this.products = (<any>Object).values(data).filter(function (item) {
      return Object.keys(item).map((key) => {
        if (item[key] !== null) {
          return item[key].toString().toLowerCase().indexOf(inputQuery) >= 0
        }
      }).reduce(function(previousValue, currentValue, index, array) {
        return previousValue || currentValue;
      })
    })
  }
}
