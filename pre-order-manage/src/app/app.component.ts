import { Component, OnInit } from '@angular/core';

import * as fromCore from '@app/core/store';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLogin: Observable<boolean>;
  constructor(private store: Store<fromCore.CoreState>) {}

  ngOnInit() {
    this.store.dispatch(new fromCore.LoadAuths());
    this.isLogin = this.store.select(fromCore.getUserLogin);
  }

  onLogout() {
    return this.store.dispatch(new fromCore.Logout());
  }
}
