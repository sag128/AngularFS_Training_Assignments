import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
categories:any[]=[{id:1,name:"Mobiles"},
{id:2,name:"Electronics"},
{id:3,name:"Shoes"},
{id:4,name:"Clothes"}]
  constructor() { }

  ngOnInit(): void {
  }

}
