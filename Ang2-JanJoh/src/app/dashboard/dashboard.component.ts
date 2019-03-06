import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedUser: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    //Getting loggedUser from Authservice via inject.
    this.loggedUser = authService.loggedUser;

    //Defining the userList
    this.userList = ['Mr. Nice', 'Narco', 'Bomvasto', 'Celeritas ', 'Magenta']
  }

  ngOnInit() {

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