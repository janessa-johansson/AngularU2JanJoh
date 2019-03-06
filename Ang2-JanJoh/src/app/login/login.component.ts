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
  loggedUser: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //Getting loggedUser from Authservice via inject.
    this.loggedUser = authService.loggedUser;

  }

  ngOnInit() {

    // Allows the router to reuse the login route.
    // Used to re-route the user to the login page after they have logged out.
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    // Subscribes to the NavigationEnd event for same-page rerouting.
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });

  }

  // Uses authService function for user login and redirects to dashboard.
  login(): void {
    this.authService.login(this.username);
    this.router.navigate(['/dashboard']);

  }

  // Uses authService function for user logout and redirects to login screen.
  // This requires special same-page rerouting and event tracking. See ngOnInit.
  logout(): void {
    this.authService.logout()
    this.router.navigate(['/login']);
  }

}