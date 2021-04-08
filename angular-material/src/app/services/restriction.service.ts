import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ProjectAdminService } from './project-admin.service';

@Injectable({
  providedIn: 'root'
})
export class RestrictionService implements CanActivate {
 
  constructor(private adminService:ProjectAdminService) { }
  canActivate(){
    if(this.adminService.projectAdminActive()){
      return true
    }
    return false;
  }

}
