import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user.model';

@Component({
  selector: 'core-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output()
  login = new EventEmitter<{ email: string; password: string }>();

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  loginAdmin(form: FormGroup) {
    const { valid, value } = form;

    if (valid) {
      this.login.emit({ ...value });
    }
  }
}
