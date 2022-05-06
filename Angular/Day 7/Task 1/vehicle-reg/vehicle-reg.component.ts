import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-reg',
  templateUrl: './vehicle-reg.component.html',
  styleUrls: ['./vehicle-reg.component.scss']
})
export class VehicleRegComponent implements OnInit {
  vehicleForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.vehicleForm = new FormGroup({
      ownerName : new FormControl('',Validators.required),
      contactNumber : new FormControl('',[Validators.required,Validators.pattern('[789]{1}\\d{9}')]),
      ownerEmail : new FormControl('',[Validators.required,Validators.email]),
      regNum : new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{1,4}$')]),
      address : new FormControl('',Validators.required),
      model : new FormControl('',[Validators.required,Validators.minLength(10)]),
      year : new FormControl('',[Validators.required,Validators.min(2012),Validators.max(2020)]),
      color: new FormControl('Black',Validators.required)
    })
  }

getControl(name:string):AbstractControl|null {
  console.log(this.vehicleForm.get('regNum')?.errors);
  
  return this.vehicleForm.get(name);
}

onSubmit() {
 alert("Vehicle Registration Successful");
 this.vehicleForm.reset();
  
}

}
