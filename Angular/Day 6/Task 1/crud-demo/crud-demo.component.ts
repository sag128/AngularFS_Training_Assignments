import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Emp } from '../model/employee.model';

@Component({
  selector: 'app-crud-demo',
  templateUrl: './crud-demo.component.html',
  styleUrls: ['./crud-demo.component.scss']
})
export class CrudDemoComponent implements OnInit {

  empno:number=0;
  job:string='';
  ename:string='';
  salary:number=0;
  deptno:number=0;


  empData:Emp[]=[];
  employeeHeaders:string[] =['Employee ID','Employee Name','Employee Designation','Employee Salary','Employee Department No','Action'];
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
  }

  getData() {
    this.crudService.getEmployeeData().subscribe((resData:Emp[])=>{
      this.empData = resData;
    })
  }


  selectData(data:Emp) {
    this.empno = data.empno;
    this.ename = data.ename;
    this.job = data.job;
    this.salary = data.salary;
    this.deptno = data.deptno;
    
  }

  deleteEmp(id:number) {
    this.crudService.deleteEmployee(id).subscribe((resData:any)=>{
      this.getData();
    })
    
  }

  update() {
    let emp:Emp = new  Emp(this.empno,this.ename,this.job,this.salary,this.deptno);
    if(this.empno==0) {
      this.crudService.addEmployee(emp).subscribe((resData:any)=>{
        this.getData();
      })
    }

    else {
    this.crudService.updateEmployee(emp).subscribe((resData:any)=>{
      this.getData();
    })
  }
}
}
