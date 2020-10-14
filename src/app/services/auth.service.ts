import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, retry } from 'rxjs/operators';
import { of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://shess-vidly-api.herokuapp.com/api/auth';
  constructor(private http: HttpClient) {}

  login(creds) {
    return this.http.post(this.url, creds, { responseType: 'text' }).pipe(
      map((token) => {
        if (token) {
          localStorage.setItem('token', token);
          return true;
        }
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    const jwtHelper = new JwtHelperService();
    const expired = jwtHelper.isTokenExpired(token);
    return !expired;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return new JwtHelperService().decodeToken(token);
  }
}
