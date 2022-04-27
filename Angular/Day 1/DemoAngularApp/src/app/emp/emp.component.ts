import { Component, OnInit } from '@angular/core';

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


  listOfNames:string[] = ["Ash","Test","TestUser","NewUser"];

  constructor() { }

  ngOnInit(): void {
  }

}
