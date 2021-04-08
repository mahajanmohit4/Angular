import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectAdminService {

  constructor() { }

  projectAdminActive(){
    return false;
  }
}
