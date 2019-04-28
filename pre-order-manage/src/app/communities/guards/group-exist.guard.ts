import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { CommunitiesServiceModule } from '../communities-service.module';

import * as fromStore from '../store';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap, map, filter, take, switchMap } from 'rxjs/operators';

import { Community } from '../models/community.model';

@Injectable({
  providedIn: CommunitiesServiceModule,
})
export class GroupExistGuard implements CanActivate {
  constructor(private store: Store<fromStore.CommuState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = route.params.commuId;
        return this.hasGroup(id);
      })
    );
  }

  hasGroup(id: number) {
    return this.store
      .select(fromStore.getGroupsEntities)
      .pipe(map((entities: { [key: number]: Community }) => !!entities[id]));
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
