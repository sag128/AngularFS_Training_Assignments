export class Emp {
    empno:number;
    ename:string;
    job:string;
    salary:number;
    deptno:number;

    constructor(empno:number,ename:string,job:string,salary:number,deptno:number) {
        this.empno = empno;
        this.ename = ename;
        this.job = job;
        this.salary = salary;
        this.deptno = deptno;
    }
}