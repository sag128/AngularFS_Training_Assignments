class OrderDetails {
    private readonly productId:number;
    private productName:string;
    private unitPrice:number;
    private quantity:number;
    


    constructor (id:number) {
        this.productId = id;
        
    }

    public get ProductName() : string {
        return this.productName;
    }

    public set ProductName(value:string) {
        this.productName = value;
    }

    
    public get Quantity() : number {
        return this.quantity;
    }

    public set Quantity(value:number) {
        this.quantity = value;
    }

    
    public get UnitPrice() : number {
        return this.unitPrice;
    }

    public set UnitPrice(value:number) {
        this.unitPrice = value;
    }

    showDetails():void {
        console.log(`Product id : ${this.productId} , Product Name : ${this.productName} , Unit Price : ${this.unitPrice} , Quantity : ${this.quantity} , Total Price : ${this.quantity*this.unitPrice}`);
    }
}


let o1:OrderDetails = new OrderDetails(101);
o1.ProductName = "Mi TV";
o1.Quantity=10;
o1.UnitPrice=14000;

let o2:OrderDetails = new OrderDetails(102);

o2.ProductName = "Samsung TV";
o2.Quantity=1;
o2.UnitPrice=70000;

o1.showDetails();
o2.showDetails();