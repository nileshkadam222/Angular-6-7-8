import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivate, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate  {
  constructor(private userservice :UserService,private router:Router){}
      canActivate(next : ActivatedRouteSnapshot,state :RouterStateSnapshot):boolean {
        debugger;
        if(this.userservice.isAdminRights() == true){
          return true;
        }else{
          alert("You dont have a acces to home page");
          this.router.navigate(['Home']);
        }
      
    }

}
