import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUs!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.contactUs = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),

      subject: new FormControl('',Validators.required),
      body : new FormControl('',Validators.required)
    })
  }

getControl(name:string):AbstractControl|null {
  return this.contactUs.get(name);
}

onSubmit() {
 alert("Email Sent! Thank You" );
 this.contactUs.reset();
  
}

}
