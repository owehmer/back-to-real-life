import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivateChild, CanLoad {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
  }

  async canActivateChild() {
    return this._redirectToLoginPageWhenNotLoggedIn();
  }

  canLoad(): Promise<boolean> {
    return this._redirectToLoginPageWhenNotLoggedIn();
  }

  private async _redirectToLoginPageWhenNotLoggedIn(): Promise<boolean> {
    if (!this._authService.isLoggedIn) {
      await this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
