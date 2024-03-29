import { AuthService } from "./auth.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService extends AuthService {
  protected _isLoggedIn = false;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  login = jest.fn();
  logout = jest.fn();
  loginViaLocalstorage = jest.fn();
}
