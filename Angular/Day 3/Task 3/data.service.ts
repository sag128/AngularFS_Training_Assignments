import { Injectable } from '@angular/core';
import { Employee } from './model/emp.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  empData:Employee[]=[{"id":1,"first_name":"Sutherlan","last_name":"Ferrar","grade":1,"salary":32541},
  {"id":2,"first_name":"Kile","last_name":"Slay","grade":4,"salary":62794},
  {"id":3,"first_name":"Virgie","last_name":"Gumly","grade":1,"salary":19340},
  {"id":4,"first_name":"Gael","last_name":"Chappelow","grade":3,"salary":17291},
  {"id":5,"first_name":"Emmit","last_name":"Spiers","grade":1,"salary":73745},
  {"id":6,"first_name":"Esme","last_name":"Greenslade","grade":4,"salary":12986}];

  addEmployee(emp:Employee) {
    let existingEmp = this.empData.findIndex(item=>item.id == emp.id);
    if(existingEmp!=-1) {
      this.empData[existingEmp] = emp;
    }
    else {
      this.empData.push(emp);
    }
    
  }

  removeEmp(empNo:number) {
    this.empData.splice(this.empData.findIndex(item=>item.id == empNo),1);
  }

  getEmployeeData():Employee[] {
    return this.empData;
  }
}
