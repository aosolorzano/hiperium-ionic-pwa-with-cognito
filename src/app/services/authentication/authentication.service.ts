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

  async addUserSession(loggedUser: CognitoUserInterface) {
    console.log('AuthenticationService - Adding user to session...');
    this.user = loggedUser;
    await this.storage.set(TOKEN_KEY, this.user.signInUserSession.accessToken.jwtToken);
    this.authenticationState.next(true);
  }

  async userLogout() {
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
    if (this.user) {
      return this.user.username;
    } else {
      return '';
    }
  }

  async checkToken() {
    console.log('AuthenticationService - checkToken()');
    const res = await this.storage.get(TOKEN_KEY);
    if (res) {
      this.authenticationState.next(true);
    }
  }
}
