import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("in intercept");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

     // Generated modifed request object
     let newReq:HttpRequest<any> = req.clone({
      setHeaders: {
          Authorization: `Bearer ${token}`
      }
     });

     return next.handle(newReq)
      .pipe(
        
        retry(1),

        catchError((error: HttpErrorResponse) => {
          
          console.log(`Error  : ${req.url}, Status Code : ${error.status} `);

         if(error.status === 404)
         {
           console.log(" resource not be found");
         }
         else if(error.status === 500) {
           console.log("Internal Server Error "+error.message);
         }
         else
         {
           console.log(error.message);
         }

          return throwError(() => new Error(error.message));
        })
      );
    
  }
}
