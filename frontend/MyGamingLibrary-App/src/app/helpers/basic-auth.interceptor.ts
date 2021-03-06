import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Request is being intercepted by basicAuthInterceptor")
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser')!);
    if(currentUser && currentUser.authdata) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUser.authdata}`
        }
      });
    }
    return next.handle(request);
  }

}
