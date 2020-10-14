import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(route, state: RouterStateSnapshot) {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(['/login'], { queryParams: { lastUrl: state.url } });
    return false;
  }
}
