import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // loggedUser: string;

  constructor(
    private AuthService: AuthService
  ) {
    //Defining the userList
    this.userList = ['Mr. Nice', 'Narco', 'Bomvasto', 'Celeritas ', 'Magenta']
  }

  loggedIn = '';

  ngOnInit(): void {

    var checkLog:any = localStorage.getItem('username');
    if (checkLog == null) {
      var loggedIn = false;
    
    } else {
      var loggedIn = true;
    }
    console.log(loggedIn);
    console.log(localStorage.getItem('username'));
  }

  

  //Defining userList as a string array
  userList: string[];

  //Adding user based on eventEmitter from edit-users-component
  addUser($event: string) {
    this.userList.unshift($event);
  }

  //Deleting a user
  deleteUser() {
    this.userList.pop();
  }
}