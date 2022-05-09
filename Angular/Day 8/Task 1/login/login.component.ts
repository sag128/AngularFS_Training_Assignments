import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      username : new FormControl('',[Validators.required]),

      password: new FormControl('',Validators.required)
    })
  }

getControl(name:string):AbstractControl|null {
  return this.loginForm.get(name);
}

onSubmit() {
 alert("Logged In Successfully" );
 this.loginForm.reset();
this.route.navigate(['/categories']);
}
}
