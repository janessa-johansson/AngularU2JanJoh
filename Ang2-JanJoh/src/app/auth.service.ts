import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser:string;

  constructor() {

  }

  checkIfLoggedIn(){
    return localStorage.getItem('username');
  }

  public login(username){
    localStorage.setItem('username', username);
    this.loggedUser = username;
  }

  public logout(){
    localStorage.clear();
    this.loggedUser = undefined;
  }
}