import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-switch-example',
  templateUrl: './switch-example.component.html',
  styleUrls: ['./switch-example.component.scss']
})
export class SwitchExampleComponent implements OnInit {

  constructor() { }

  option:string="details";

  productsArray:Product[] = [ {pid:1,pname:"Samung M21",category:"Mobiles",quantity:10,price:10000,picture:"../../assets/mobiles.jpg"},
  {pid:2,pname:"Oneplus 10 ",category:"Mobiles",quantity:5,price:100000,picture:"../../assets/mobiles.jpg"},
  {pid:3,pname:"Iphone 12",category:"Mobiles",quantity:2,price:100122,picture:"../../assets/mobiles.jpg"},
  {pid:4,pname:"Dell",category:"Laptops",quantity:10,price:60000,picture:"../../assets/laptop.jpg"},
  {pid:5,pname:"Apple Macbook Air",category:"Laptop",quantity:1,price:100000,picture:"../../assets/laptop.jpg"},
  {pid:6,pname:"Lenovo Thinkpad",category:"Laptop",quantity:100,price:45000,picture:"../../assets/laptop.jpg"},
  {pid:7,pname:"Blue Tshirt",category:"Clothes",quantity:100,price:500,picture:"../../assets/clothes.jpg"},
  {pid:8,pname:"White Shirt",category:"Clothes",quantity:200,price:600,picture:"../../assets/clothes.jpg"},
  {pid:9,pname:"Black Jeans",category:"Clothes",quantity:1000,price:100,picture:"../../assets/clothes.jpg"},

  ]

  values:any[] = [{'value':'details','img':'../../assets/details.jpg'},

  {'value':'list','img':'../../assets/list.jpg'},
  {'value':'large_icon','img':'../../assets/xlarge-icons.png'},
  {'value':'small_icon','img':'../../assets/small.jpg'},

]

  ngOnInit(): void {
  }
  changeOption(val:string) {
  this.option=val;
      
  }
}
