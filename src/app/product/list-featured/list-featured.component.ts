import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'product-list-featured',
  templateUrl: '../list/list.component.html'
})
export class ListFeaturedComponent extends ListComponent implements OnInit {

  title: string = 'Featured list';

  constructor() {
    super();
  }

  ngOnInit() {
    this.products = this.products.filter((item) => {
      // const featured = item.featured;
      // console.log(featured);
      return item.featured;
    })
  }

}
