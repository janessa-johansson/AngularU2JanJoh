import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Input for user and textColor (string)
  @Input() user: string;
  @Input() textColor: string;

  //Getting user colors
  getColor(): Object {
    return { "color": this.textColor };
  }
}