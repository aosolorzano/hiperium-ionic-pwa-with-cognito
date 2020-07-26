import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    console.log('AuthGuardService - canActivate()');
    const isUserLoggedIn = this.authService.isAuthenticated();
    if (!isUserLoggedIn) {
      console.log('AuthGuardService - User is not LoggedIn');
      this.router.navigateByUrl('/login');
    }
    return isUserLoggedIn;
  }
}
