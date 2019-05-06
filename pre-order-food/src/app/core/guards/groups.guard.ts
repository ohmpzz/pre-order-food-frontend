import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable({ providedIn: 'root' })
export class GroupsGuard implements CanActivate {
  constructor(private store: Store<fromStore.CoreState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getGroupsLoaded).pipe(
      tap(loaded => {
        this.store.dispatch(new fromStore.LoadGroups());
      }),
      take(1)
    );
  }
}
