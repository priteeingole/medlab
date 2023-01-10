import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getToken() {
    var token: any = "";
    token = localStorage.getItem('authToken');
    if (token) {
      return token
    }
    return token;
  }
  getUser(){
     var user:any ;
     user = localStorage.getItem('user');
     if(user){
      user = JSON.parse(user);
     }
     return user ;
  }
  }

