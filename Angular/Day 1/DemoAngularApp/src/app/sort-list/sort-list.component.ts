import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.scss']
})
export class SortListComponent implements OnInit {
  @Output()
  onSortColumnChange:EventEmitter<string>=new EventEmitter();
  values = [{name:"Category",value:"category"},
  {name:"Product Name",value:"pname"},{name:"Product ID",value:"pid"},
  {name:"Price",value:"price"},{name:"Quantity",value:"quantity"},
];

  constructor() { }

  ngOnInit(): void {
  }
getSortColumn(val:string) {
  this.onSortColumnChange.emit(val);
  
}
}
