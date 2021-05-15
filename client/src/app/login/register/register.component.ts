import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Output()
  registerComplete = new EventEmitter<void>()

  @Output()
  registerAbort = new EventEmitter<void>()

  form = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    passwordConfirm: new FormControl(),
  });

  tryRegister() {
    this.registerComplete.emit();
  }

  cancelRegister() {
    this.registerAbort.emit();
  }
}
