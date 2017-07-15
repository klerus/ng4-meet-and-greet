import { Component } from '@angular/core';
import * as data from './data.json';
import {ProductsRepositoryService} from './products-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  prodRepo: ProductsRepositoryService;
  products = [];

  constructor (prodRepo: ProductsRepositoryService) {
    this.prodRepo = prodRepo;
    this.products = this.prodRepo.getProducts();
  }

  public filter (inputQuery) {
    this.prodRepo.filterQuery = inputQuery;
    this.products = this.prodRepo.getProducts();
  }

  public sort (key, ascending = true) {
    this.prodRepo.orderKey = key;
    this.prodRepo.orderAscending = ascending;

    this.products = this.prodRepo.getProducts();
  }
}
