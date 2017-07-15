import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product : any;

  constructor() {
  }

  ngOnInit() {
  }

}
