import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

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

  registerClicked() {
    this.showRegister = true;
    this.form.reset();
  }

  tryLogin() {
    console.info('Form Input', this.form.getRawValue());
  }

}
