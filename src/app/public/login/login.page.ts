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

  async ngOnInit() {
    onAuthUIStateChange(async (authState, authData) => {
      console.log('LoginPage - onAuthUIStateChange(): ', authState);
      if ('signedin' === authState) {
        await this.authService.userSignedIn(authData as CognitoUserInterface);
      }
    });
  }
}
