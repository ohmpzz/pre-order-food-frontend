import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CommunitiesServiceModule } from '../communities-service.module';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: CommunitiesServiceModule,
})
export class GroupsGuard implements CanActivate {
  constructor(private store: Store<fromStore.CommuState>) {}
  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getGroupsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadGroups());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
