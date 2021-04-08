import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectAdminService } from './project-admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate,CanLoad {
  private projectAdminService:ProjectAdminService
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
     
    return true
   
    
  }

  canLoad(){
    // if(this.projectAdminService.projectAdminActive()){
    //   return true
    // }else{
    //   return false;
    // }
    return false
  }
  
}
