import { Component, OnInit, Input } from '@angular/core';

export class Product {
  name: string;
  value: number;
  description: string;
  featured: boolean = false;
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
