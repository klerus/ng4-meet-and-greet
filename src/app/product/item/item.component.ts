import { Component, OnInit, Input } from '@angular/core';

export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  featured: boolean = false;

  constructor () {

  }
}

@Component({
  selector: 'product-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  @Input() public product : Product;

  constructor() {
  }

  ngOnInit() {

  }

}
