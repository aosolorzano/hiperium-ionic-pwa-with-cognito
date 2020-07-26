import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;
  public isLoggedIn = false;
  public welcomeMessage = '';

  public appPages = [
    {
      title: 'DashBoard',
      url: '/members/dashboard',
      icon: 'home'
    }
  ];

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    console.log('AppComponent - ngOnInit()');
    this.authService.authenticationState.subscribe(async state => {
      console.log('AppComponent - Auth Service changed. Is user loggedin: ' + state);
      this.updateLoggedInStatus(state);
      if (state) {
        const username = this.authService.getUsername();
        this.welcomeMessage = `Welcome ${ username }`;
        await this.router.navigateByUrl('/members/dashboard');
      }
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    console.log('AppComponent - updateLoggedInStatus(): ', loggedIn);
    this.isLoggedIn = loggedIn;
  }

  async signOut() {
    console.log('AppComponent - signOut() INIT');
    await Auth.signOut({ global: true }).then(async (response) => {
      console.log('signOut successful...');
      await this.authService.userLogout();
    }).catch ((error) => {
      console.log('error signing out: ', error);
    });
    console.log('AppComponent - signOut() END');
  }
}
