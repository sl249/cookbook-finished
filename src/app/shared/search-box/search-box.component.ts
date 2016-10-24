import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchPlaceHolder: string;
  @Output() textChanged = new EventEmitter();  

  constructor() { }


  set searchString(searchString: string) {
    this.textChanged.emit({ value: searchString });
  }

  ngOnInit() {
    this.searchPlaceHolder = this.searchPlaceHolder ? this.searchPlaceHolder : 'Search for Cookbooks';
  }

}
