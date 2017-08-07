import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html'
})
export class SearchContactComponent implements OnInit {

  @Output() filterContact: EventEmitter<string>;

  constructor() {
    this.filterContact = new EventEmitter();
  }

  ngOnInit() {
  }

  onKey(value: string): void {
    this.filterContact.emit(value);
  }
}
