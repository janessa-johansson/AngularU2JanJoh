import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Input for users string array
  @Input() users: string[];

  //A toggle for colors
  myToggle: boolean = true;

  //Toggling user colors
  toggleColors() {
    this.myToggle = !this.myToggle;
  }

  //Changing user colors dependent on the toggle state
  changeIt(): string {
    if (this.myToggle) {
      return "purple";
    }
    else {
      return "olivedrab";
    }
  }
}