import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { CoreServiceModule } from '../core-service.module';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { Observable } from 'rxjs';
import { tap, take, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: CoreServiceModule,
})
export class AuthGuard implements CanLoad {
  constructor(private store: Store<fromStore.CoreState>) {}

  canLoad(): Observable<boolean> {
    return this.checkStore().pipe(
      map(logged => {
        return logged;
      })
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getUserLogin).pipe(
      tap(logged => {
        if (!logged) {
          this.store.dispatch(new fromStore.LoadAuths());
        } else {
          return logged;
        }
      }),
      filter(logged => logged),
      take(1)
    );
  }
}
