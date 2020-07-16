import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http : HttpClient) { }

  getUser(x){
    return this.http.get('https://randomuser.me/api/?results='+x);
  }

}
//this.http.get('https://clienteservidorthomas15.herokuapp.com/api/v1/example/example1/')