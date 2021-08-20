import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showRegister = false;

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private _authService: AuthService,
              private _router: Router) {
  }

  registerClicked() {
    this.showRegister = true;
    this.form.reset();
  }

  tryLogin() {
    if (this.form.valid) {
      this._authService.login();
      this._router.navigate(['news']);
    }
  }
}
