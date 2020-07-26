import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

import { CognitoUserInterface } from '@aws-amplify/ui-components';

const TOKEN_KEY = 'user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: CognitoUserInterface | undefined;
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage) { }

  async userSignedIn(loggedUser: CognitoUserInterface): Promise<void> {
    this.user = loggedUser;
    console.log('AuthenticationService - Adding user to session: ');
    console.log(this.user);
    await this.storage.set(TOKEN_KEY, this.user.signInUserSession.accessToken.jwtToken);
    this.authenticationState.next(true);
  }

  async userLogout(): Promise<void> {
    console.log('AuthenticationService - Removing user from session...');
    await this.storage.remove(TOKEN_KEY);
    this.authenticationState.next(false);
  }

  isAuthenticated(): boolean {
    console.log('AuthenticationService - isAuthenticated()');
    return this.authenticationState.value;
  }

  getUsername(): string {
    console.log('AuthenticationService - getUsername()');
    if (this.authenticationState.value) {
      return this.user.username;
    } else {
      return '';
    }
  }

}
