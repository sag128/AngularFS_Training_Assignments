class OrderDetails {
    private readonly productId:number;
    private productName:string;
    private unitPrice:number;
    private quantity:number;
    


    constructor (id:number,productName:string,unitPrice:number,qty:number=1) {
        this.productId = id;
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.quantity = qty;
    }

    showDetails():void {
        console.log(`Product id : ${this.productId} , Product Name : ${this.productName} , Unit Price : ${this.unitPrice} , Quantity : ${this.quantity} , Total Price : ${this.quantity*this.unitPrice}`);
    }
}


let o1:OrderDetails = new OrderDetails(101,"Mi TV",14000,10);
let o2:OrderDetails = new OrderDetails(102,"Samsung TV 4K ",70000);

o1.showDetails();
o2.showDetails();