import { Injectable } from '@angular/core';

export const LOGIN_STORAGE_TOKEN = 'login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  protected _isLoggedIn = false;

  login() {
    this._isLoggedIn = true;
    localStorage.setItem(LOGIN_STORAGE_TOKEN, 'test:test');
  }

  logout() {
    this._isLoggedIn = false;
    localStorage.removeItem(LOGIN_STORAGE_TOKEN);
  }

  loginViaLocalstorage(): boolean {
    if (this.isLoggedIn) {
      return true;
    }

    const loginCredentials = localStorage.getItem(LOGIN_STORAGE_TOKEN);
    if (loginCredentials) {
      this.login();
      return true;
    }
    return false;
  }
}
