import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser: string;


  constructor() {

  }
  // Method that checks if the user is logged in or not based on getting a
  // value from local storage.
  checkIfLoggedIn() {
   return localStorage.getItem('username');
  }

  // Method that handles logging in a user.
  // Stores username in local storage and sets loggedUser to a value.
  // Usage: loggedUser determines which divs to show on login.component and dashboard.

  public login(username) {
    localStorage.setItem('username', username);
    this.loggedUser = "exists";
  }


  // Method that handles logging out a user.
  // Clears local storage and sets loggedUser to undefined.
  // Usage: loggedUser determines which divs to show on login.component and dashboard.

  public logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}