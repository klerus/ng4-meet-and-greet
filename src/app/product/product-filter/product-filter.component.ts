import { Product } from '../item/item.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Output() public queryChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public triggerQueryEvent(query) {
    this.queryChange.next(query.value)
  }

}
