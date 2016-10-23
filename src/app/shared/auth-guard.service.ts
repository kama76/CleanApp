import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            console.log("Der user ist da");
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}