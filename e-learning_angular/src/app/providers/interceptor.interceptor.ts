import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor () {}

  intercept (req: HttpRequest<any>, next: HttpHandler) {
    let token = localStorage.getItem('preToken')
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'bearer ' + token)
      })
    }
    return next.handle(req)
  }
}
