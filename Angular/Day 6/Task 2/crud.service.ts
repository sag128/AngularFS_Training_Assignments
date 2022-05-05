import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Emp } from './model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  BASE_URL:string = 'http://localhost:3000/employees/'; 

  constructor(private httpClient:HttpClient) { }

  getEmployeeData():Observable<Emp[]> {
    return this.httpClient.get<Emp[]>(this.BASE_URL);
  }

  getEmployeeById(id:number):Observable<Emp> {
    return this.httpClient.get<Emp>(this.BASE_URL+id);
  }

  addEmployee(employee:Emp) {
    return this.httpClient.post(this.BASE_URL,employee);
  }

  updateEmployee(employee:Emp) {
    return this.httpClient.put(this.BASE_URL+employee.empno,employee);
  }

  deleteEmployee(id:number) {
    return this.httpClient.delete(this.BASE_URL+id);
  }

  getEmployeeByDeptNumber():Observable<Emp[]> {
    return this.httpClient.get<Emp[]>(this.BASE_URL).pipe(
      map(res=>{
        return res.filter(item=>item.deptno!==6)
      })
    )
  }



  getEmployeeByJob(job:string):Observable<Emp[]> {
    return this.httpClient.get<Emp[]>(this.BASE_URL).pipe(
      map(res=>{
        return res.filter(item=>item.job===job)
      })
    )
  }


  getNameAndDepartment(deptno:number):Observable<any[]> {
    return this.httpClient.get<any[]>(this.BASE_URL).pipe(
      map(res=>{
        return res.filter(item=>item.deptno===deptno && item.job=='Manager').map(x=>{return x.ename})
    })
    )
  }

  getNameAndDesignation():Observable<any[]> {
    return this.httpClient.get<any[]>(this.BASE_URL).pipe(
      map(res=>{
        return res.map(item=>{
          return {
          ename:item.ename,job:item.job
        }
      })
    })
    )
  }


  sortBasedOnSalary():Observable<any[]> {
    return this.httpClient.get<any[]>(this.BASE_URL).pipe(
      map(res=>{
        return res.sort((item,item2)=>(item.salary > item2.salary)?-1:1 )
    })
    )
  }

  







}
