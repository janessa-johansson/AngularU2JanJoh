import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  loggedIn: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  login(): void {
    this.authService.login(this.username);
    this.router.navigate(['/dashboard']);

  }

  logout(): void {
    this.authService.logout()
  }

}