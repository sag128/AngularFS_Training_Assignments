class Customer {
    private readonly custId:number;
    private custName:string;
    private custCity:string;


    constructor (id:number=0,name:string="",city:string="") {
        this.custId = id;
        this.custCity = city;
        this.custName = name;
    }

    showDetails():void {
        console.log(`Customer id : ${this.custId} , Name : ${this.custName} , City : ${this.custCity}`);
    }
}

let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10256,"Scott");
let c4:Customer = new Customer(10256,"Scott","Hyd");


c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
