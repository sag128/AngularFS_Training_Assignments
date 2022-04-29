export class Employee {
    id:number;
    first_name:string;
    last_name:string;
    grade:number;
    salary:number;

    constructor(id:number,first_name:string,last_name:string,grade:number,salary:number) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.grade = grade;
        this.salary = salary;
    }
}