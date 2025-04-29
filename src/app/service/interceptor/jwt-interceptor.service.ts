import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let userToken = this.authService.getToken();

    if (req.url.includes('/api/auth/')) {
      return next.handle(req); // Bypass interceptor
    }

    if (userToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${userToken}`,
        },
      });
    } else {
    
        this.router.navigate(['/']);
    
    }

    return next.handle(req);
  }
  
}
