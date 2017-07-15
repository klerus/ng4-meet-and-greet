import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../item/item.component';

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public products : Array<Product>;
  title : string = 'Prouct list'


  constructor() { }

  ngOnInit() {
  }



}
