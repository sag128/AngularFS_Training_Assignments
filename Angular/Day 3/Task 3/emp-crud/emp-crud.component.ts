import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../model/emp.model';

@Component({
  selector: 'app-emp-crud',
  templateUrl: './emp-crud.component.html',
  styleUrls: ['./emp-crud.component.scss']
})
export class EmpCrudComponent implements OnInit {

  constructor(private dataService:DataService) { }
  id:number=1;
  first_name:string="";
  last_name:string="";
  grade:number=1;
  salary:number=10000;

employeeHeaders:string[] = ['id','first_name','last_name','grade','salary'];
employeeData:Employee[] = [];

ngOnInit(): void {

this.getData();
}

addEmp() {
  let emp:Employee = new Employee(this.id,this.first_name,this.last_name,this.grade,this.salary);
  this.dataService.addEmployee(emp);
  this.getData()
}
deleteEmp(id:number) {
  this.dataService.removeEmp(id);
  this.getData();
}

getData() {
  this.employeeData = this.dataService.getEmployeeData();
}
}
