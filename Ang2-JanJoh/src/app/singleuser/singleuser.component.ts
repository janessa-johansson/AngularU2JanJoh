import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {

  userId: string;
  
  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    // Subscribing to parameters of the route url, which is then used to print the
    // user name on the singleuser html.
    this.route.params.subscribe(params => {
      this.userId = params.id;
   })
  }
 

}
