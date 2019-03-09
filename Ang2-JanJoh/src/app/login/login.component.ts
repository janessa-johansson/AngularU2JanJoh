import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  loggedUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //Getting loggedUser from Authservice
    this.loggedUser = authService.checkIfLoggedIn();

  }

  ngOnInit() {

  }

  // Uses authService function for user login and redirects to dashboard.
  login(): void {
    this.authService.login(this.username);
    this.router.navigate(['/dashboard']);

  }

  // Uses authService function for user logout and chcks if user is logged in.
  logout(): void {
    this.authService.logout();
    this.loggedUser = this.authService.checkIfLoggedIn();
  }
  // Uses authService function to check if user is logged in
  checklog(): void {
    this.loggedUser = this.authService.checkIfLoggedIn();
  }

}