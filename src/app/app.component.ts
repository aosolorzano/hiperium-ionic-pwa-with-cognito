import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log('AppComponent - initializeApp()');
    this.platform.ready().then(() => {
      console.log('AppComponent - Platform is ready.');
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.checkToken();
      this.authService.authenticationState.subscribe(state => {
        this.isLoggedIn = state;
        console.log('AppComponent - AuthService changed. Is user LoggedIn?: ', this.isLoggedIn);

        if (this.isLoggedIn) {
          const username = this.authService.getUsername();
          this.welcomeMessage = `Welcome ${ username }`;
          this.router.navigate(['members', 'dashboard']);
        }
      });
    });
  }
}
