import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {

  id:number = 101;
  name:string="Stephen";
  role:string = "Manager";
  salary:number = 75000;
  departmentNo:number = 10;
  productName:string="";
  productPrice:number=0;
  quantity:number=0;

  

  listOfNames:string[] = ["Ash","Test","TestUser","NewUser"];

  listOfProducts:Product[] = [
    {pid:1,category:"Chocolate",pname:"Cadbury",quantity:10,price:0},
    {pid:2,category:"Chips",pname:"Lays",quantity:50,price:0},
    {pid:3,category:"Drinks",pname:"Pepsi",quantity:30,price:0},
    {pid:4,category:"Frozen",pname:"McCain",quantity:5,price:0},
    {pid:5,category:"Dairy",pname:"Amul Milk",quantity:100,price:0},
    
  ]
  total: number=0;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.total = this.productPrice*this.quantity;
  }

}
