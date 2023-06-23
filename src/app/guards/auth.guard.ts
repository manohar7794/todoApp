import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private authService: AuthService) {}
  canActivate() {
    const isLoggedIn = this.authService.isLoggedIn;
    console.log('isLoggedIn@@@@@', isLoggedIn);
    if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
  }
  canDeactivate() {
   alert('are you leaving!!!!!');
    
  }
}


