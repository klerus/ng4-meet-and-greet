import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchInput = new FormControl();
  public sortOptions: object[];
  @Output() public queryChange = new EventEmitter();
  constructor() { }

  sort(name: string) {
    this.sortOptions[name] = this.sortOptions[name] === 'asc' ? 'desc' : 'asc';
    this.queryChange.next(this.sortOptions);
  }

  public triggerQueryEvent(query) {
    this.queryChange.next(query.value);
  }

  ngOnInit() {
  }

}
