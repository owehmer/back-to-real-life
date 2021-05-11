import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get isLoggedIn(): boolean {
    return this._isLoggedId;
  }

  private _isLoggedId = false;

  login() {
    this._isLoggedId = true;
  }

  logout() {
    this._isLoggedId = false;
  }
}
