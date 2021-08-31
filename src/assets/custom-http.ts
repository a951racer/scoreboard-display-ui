import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { apiConfig } from '../app/apiConfig';

@Injectable()

export class CustomHttp implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.getJwt();
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
      url: apiConfig.apiUrl + req.url
    });
    return next.handle(authReq);
  }

  private getJwt() {
    let token = null
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        token = 'Authorization', 'Bearer ' + currentUser.token
    }
    return token
  }

}
