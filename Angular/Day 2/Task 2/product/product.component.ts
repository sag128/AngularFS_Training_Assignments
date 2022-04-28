import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
selectedLoc:string="all";
selectedCol:string="pid";
constructor() { }

  ngOnInit(): void {
  }


  updateSelectedColumn(column:string) {
    this.selectedCol=column;
  }
}
