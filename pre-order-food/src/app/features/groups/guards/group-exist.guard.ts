import { Injectable } from '@angular/core';
import { GroupsServiceModules } from '../groups-service.module';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap, take, switchMap, map, filter } from 'rxjs/operators';
import { Group } from '@app/core/models/group.model';

import * as fromCoreStore from '@app/core/store';

@Injectable({ providedIn: GroupsServiceModules })
export class GroupExistGuard implements CanActivate {
  constructor(private store: Store<fromCoreStore.CoreState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const id = route.params.groupId;
    return this.checkStore(id).pipe(
      switchMap(() => {
        return of(true);
      })
    );
  }

  hasGroup(id: string) {
    return this.store
      .select(fromCoreStore.getGroupsEntities)
      .pipe(map((entities: { [key: number]: Group }) => !!entities[id]));
  }

  checkStore(id): Observable<boolean> {
    return this.store.select(fromCoreStore.getGroupsLoadedById).pipe(
      tap(loaded => {
        this.store.dispatch(new fromCoreStore.LoadGroupById(id));
      }),
      take(1)
    );
  }
}
