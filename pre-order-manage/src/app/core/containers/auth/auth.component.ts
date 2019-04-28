import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private store: Store<fromStore.CoreState>) {}

  ngOnInit() {}

  onLogin(event: { email: string; password: string }) {
    this.store.dispatch(new fromStore.Login(event));
  }
}
