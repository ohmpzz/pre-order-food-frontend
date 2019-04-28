import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userData: Observable<any>;
  constructor(private store: Store<fromStore.CoreState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.UpdateUser());
    this.userData = this.store.select(fromStore.getUserEntities);
    this.userData.subscribe(user => {
      console.log(user);
    });
  }

  loginWithLine() {
    this.store.dispatch(new fromStore.LoginLine());
  }

  logout() {
    this.store.dispatch(new fromStore.Logout());
  }
}
