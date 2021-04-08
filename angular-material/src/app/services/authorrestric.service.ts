import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthorService } from './author.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorrestricService implements CanActivate{

  constructor(private authorService: AuthorService) { }
  canActivate(){
    if(this.authorService.authorActive()){
      return true;
    }
    return false
  }
}
