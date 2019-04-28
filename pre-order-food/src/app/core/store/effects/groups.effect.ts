import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as groupActions from '../actions/groups.action';
import * as fromServices from '../../services';

@Injectable()
export class GroupEffects {
  constructor(
    private action$: Actions,
    private groupService: fromServices.GroupsService
  ) {}

  @Effect({ dispatch: false })
  addMember$ = this.action$.pipe(
    ofType(groupActions.GroupsActionTypes.AddMember),
    map((action: groupActions.AddMember) => action.payload),
    switchMap((payload: { groupId: string; userId: string }) => {
      return this.groupService.addMember(payload.groupId, payload.userId);
    })
  );

  @Effect()
  loadGroups$ = this.action$.pipe(
    ofType(groupActions.GroupsActionTypes.LoadGroups),
    switchMap(() => {
      return this.groupService.getGroups().pipe(
        map(groups => new groupActions.LoadGroupsSuccess(groups)),
        catchError(error => of(new groupActions.LoadGroupsFail(error)))
      );
    })
  );

  @Effect()
  loadGroupById$ = this.action$.pipe(
    ofType(groupActions.GroupsActionTypes.LoadGroupById),
    map((action: groupActions.LoadGroupById) => action.payload),
    switchMap(groupId => {
      return this.groupService.getGroupById(groupId).pipe(
        map(group => new groupActions.LoadGroupByIdSuccess(group)),
        catchError(error => of(new groupActions.LoadGroupByIdFail(error)))
      );
    })
  );
}
