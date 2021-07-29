import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError,of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  errMesage:String;
  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("call interceptor")
    const token = localStorage.getItem('token');
    if(token){
      request = request.clone({
        url: request.url,
        headers: request.headers.set('Authorization', 'Bearer '+token)
      });
    }
    return next.handle(request).pipe(catchError(x=>this.handleAuthError(x)));
  }

  private handleAuthError(err:HttpErrorResponse):Observable<any>{
    console.log("call handler")
    if(err.status === 403){
      // this.router.navigateByUrl('/login');

      this.errMesage="chi co Admin moi co the truy cap chuc nang nay";
      this.router.navigate(['/login',this.errMesage])
      return of(err.message);
    }
    return throwError(err);
  }


}
