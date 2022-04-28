import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  category:string="";

  products:Product[] = [
    {category:"Mobiles",pname:"Redmi",pid:1,price:14000,quantity:5},
    {category:"Mobiles",pname:"Iphone",pid:2,price:55000,quantity:2},
    {category:"Mobiles",pname:"Jio Phone",pid:3,price:10000,quantity:10},
    {category:"Electronics",pname:"HairDryer",pid:4,price:1000,quantity:21},
    {category:"Electronics",pname:"Monitor",pid:5,price:10000,quantity:8},
    {category:"Electronics",pname:"Keyboard",pid:6,price:800,quantity:80},
    {category:"Shoes",pname:"Adidas",pid:7,price:1000,quantity:10},
    {category:"Shoes",pname:"Nike",pid:8,price:2000,quantity:15},
    {category:"Shoes",pname:"Reebok",pid:9,price:3800,quantity:19},
    {category:"Clothes",pname:"T-Shirt",pid:10,price:1000,quantity:100},
    {category:"Clothes",pname:"Shirt",pid:11,price:400,quantity:150},
    {category:"Clothes",pname:"Jeans",pid:12,price:1700,quantity:190},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
