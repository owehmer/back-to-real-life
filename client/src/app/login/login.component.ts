import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  tryLogin() {
    console.info('Form Input', this.form.getRawValue());
  }

}
