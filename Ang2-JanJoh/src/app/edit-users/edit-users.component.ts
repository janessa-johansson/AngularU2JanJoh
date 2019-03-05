import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Output for Event Emmiters
  @Output() addUserE = new EventEmitter<string>();
  @Output() deleteUserE = new EventEmitter<void>();

  //Inputting name
  @Input() name = '';

  //Event Emitter to dashboard for adding users
  addUser() {
    this.addUserE.emit(this.name);
    this.name = '';
  }

  //Event Emitter to dashboard for deleting users
  deleteUser() {
    this.deleteUserE.emit();
  }
}