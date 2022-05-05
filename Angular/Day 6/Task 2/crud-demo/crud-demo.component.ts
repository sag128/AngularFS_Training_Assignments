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
  filterJob:string='';
  filterDept:number=0;


  empData:Emp[]=[];
  nameAndJob:any[]=[];

  names:string[]=[];
  employeeHeaders:string[] =['Employee ID','Employee Name','Employee Designation','Employee Salary','Employee Department No','Action'];
  depData: Emp[]=[];
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

sortData() {
  this.crudService.sortBasedOnSalary().subscribe((res:Emp[])=>{
    this.empData = res;
  })
}

getEmployeeByDeptNumber() {
  this.crudService.getEmployeeByDeptNumber().subscribe((res:Emp[])=>{
    this.empData = res; 
  })
}

getEmployeeByJob() {
  this.crudService.getEmployeeByJob(this.filterJob).subscribe(res=>{
    this.empData=res;
  })
}
getNameAndDepartment() {
  this.crudService.getNameAndDepartment(this.filterDept).subscribe(res=>{
  this.names=res;
  })
}

getNameAndDesignation() {
  this.crudService.getNameAndDesignation().subscribe(res=>{
    this.nameAndJob = res;
  })
}

}
