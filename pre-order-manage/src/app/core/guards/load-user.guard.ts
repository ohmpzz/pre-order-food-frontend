import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CoreServiceModule } from '../core-service.module';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import * as fromRoot from '@app/store';

import { Observable, of } from 'rxjs';
import { tap, take, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: CoreServiceModule,
})
export class LoadUserGuard implements CanActivate {
  constructor(private store: Store<fromStore.CoreState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore();
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getUserLogin).pipe(
      tap(logged => {
        console.log('here');
        if (!logged) {
          this.store.dispatch(new fromStore.LoadAuths());
        }
      }),
      filter(logged => logged),
      take(1)
    );
  }
}
