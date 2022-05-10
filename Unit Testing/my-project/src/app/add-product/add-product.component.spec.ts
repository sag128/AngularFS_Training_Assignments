import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  it('default quantity should be 1', () => {
    const qty: number = component.quantity;
    expect(qty).toBe(1);
  });


  
  it('default result message should be empty', () => {
    let messageObj = fixture.nativeElement.querySelector('span');
    expect(messageObj.textContent).toBe('');
  });


  
  it('should result contains "Total Amount : 1000"', () => {
    component.unitprice = 100;
    component.quantity = 10;
    component.getTotalAmount();
    const output: any = component.total;
    expect(output).toEqual("Total Amount : 1000");
  });


  it('should result contains "Total Amount : NaN"', () => {
    component.unitprice = 100;
    component.quantity = "abcd";
    component.getTotalAmount();
    const output: any = component.total;
    expect(output).toEqual("Total Amount : NaN");
  });


  it('should set the Quantity to 4 in textbox', () => {

    let quantity = fixture.nativeElement.querySelector('[name="quantity"]');

    quantity.value = 4;
    quantity.dispatchEvent(new Event('input'));
    expect(component.quantity).toBe(4);
  });



  it('should set the Unit price to 6 in textbox', () => {

    let unitprice = fixture.nativeElement.querySelector('[name="unitprice"]');

    unitprice.value = 6;
    unitprice.dispatchEvent(new Event('input'));
    expect(component.unitprice).toBe(6);
  });



  it('should display message in span "Total Amount : 24"', () => {
    let unitprice = fixture.nativeElement.querySelector('[name="unitprice"]');
    let quantity = fixture.nativeElement.querySelector('[name="quantity"]');
    let productname = fixture.nativeElement.querySelector('[name="productname"]');
    

    productname.value = 'new prod';
    productname.dispatchEvent(new Event('input'));

    unitprice.value = 12;
    unitprice.dispatchEvent(new Event('input'));


    quantity.value = 2;
    quantity.dispatchEvent(new Event('input'));

    let inputObj = fixture.nativeElement.querySelector('button');
    inputObj.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    let parObj = fixture.nativeElement.querySelector('span');
    expect(parObj.textContent).toBe("Total Amount : 24");


  });

});
