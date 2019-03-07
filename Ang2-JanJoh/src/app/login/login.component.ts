import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

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

    //Getting loggedUser from Authservice via inject.
    this.loggedUser = authService.checkIfLoggedIn();
    console.log(this.loggedUser);
  
  }

  ngOnInit() {

  }

  // Uses authService function for user login and redirects to dashboard.
  login(): void {
    this.authService.login(this.username);
    this.router.navigate(['/dashboard']);

  }

  // Uses authService function for user logout and redirects to login screen.
  // This requires special same-page rerouting and event tracking. See ngOnInit.
  logout(): void {
    this.authService.logout();
    console.log(this.authService.checkIfLoggedIn())
    this.loggedUser = this.authService.checkIfLoggedIn();
  }

  checklog(): void {
    this.loggedUser = this.authService.checkIfLoggedIn();
    }

}