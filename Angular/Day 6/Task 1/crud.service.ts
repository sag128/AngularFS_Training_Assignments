import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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





}
