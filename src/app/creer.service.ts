import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from './categorie';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CreerService {
  categories: Categorie[];
  liste = new Categorie();

  private readonly newProperty = this;

  constructor(private httpclient:HttpClient) {
    this.categories= [ {idList : 1, nomList : "Dasri"},
    {idList : 2, nomList : "Dasr"}]; 
   }
  registerUser(user:User){
    console.log(user);
     return this.httpclient.post('baseUrl',user);
  }
  loginUser(user:User){
    console.log(user);
     return this.httpclient.post('baseUrl',user);
  }
  listeCategories():Categorie[] {
    return this.categories;
  }
 
}
