import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.authenticationService.getToken();
      if(token){
        return true;
      } else{
        this.router.navigate(['home']);
        return false;
      }

    return true;


  }
  
}
