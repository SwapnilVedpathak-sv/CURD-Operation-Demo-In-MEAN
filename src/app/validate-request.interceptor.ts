import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { RootService } from './root.service'


@Injectable()
export class ValidateRequestInterceptor implements HttpInterceptor {

  constructor(private root: RootService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authToken = this.root.getToken();

    request = request.clone({
      setHeaders: {
        authorization: `Bearer ${authToken}`
      }
    });
    return next.handle(request).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.message}`
    })
    return throwError(error.message || "Serve Error")
  }
}
