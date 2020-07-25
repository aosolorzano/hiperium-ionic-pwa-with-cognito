import { Component, OnInit } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface } from '@aws-amplify/ui-components';

import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      console.log('LoginPage - onAuthUIStateChange(): ', authState);

      const user = authData as CognitoUserInterface;
      console.log('LoginPage - User: ', user);

      if (user) {
        this.authService.addUserSession(user);
      } else if ('signedout' === authState) {
        this.authService.userLogout();
      }
    });
  }
}
