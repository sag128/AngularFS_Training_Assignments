import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObervableService {

  constructor(private http:HttpClient) {


   }

   getData():Observable<any> { 
     return this.http.get('https://reqres.in/api/users');
   }
}
