import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as fromRoot from '@app/store';
import * as groupActions from '../actions/group.actions';
import * as fromServices from '../../services';

@Injectable()
export class GroupEffects {
  constructor(
    private action$: Actions,
    private groupService: fromServices.GroupService
  ) {}

  @Effect()
  addMember$ = this.action$.pipe(
    ofType(groupActions.GroupActionTypes.addMember),
    map((action: groupActions.AddMember) => action.payload),
    switchMap(payload => {
      return this.groupService.addMember(payload.groupId, payload.userId).pipe(
        map(community => new groupActions.AddMemberSuccess(community)),
        catchError(error => of(new groupActions.AddMemberFail(error)))
      );
    })
  );

  // @Effect()
  // addMemberSuccess$ = this.action$.pipe(
  //   ofType(groupActions.GroupActionTypes.addMemberSuccess),
  //   map(() => {
  //     return new fromRoot.Back();
  //   })
  // );

  @Effect()
  loadGroups$ = this.action$.pipe(
    ofType(groupActions.GroupActionTypes.LoadGroups),
    switchMap(() => {
      return this.groupService.getGroups().pipe(
        map(groups => new groupActions.LoadGroupsSuccess(groups)),
        catchError(error => of(new groupActions.LoadGroupsFail(error)))
      );
    })
  );

  @Effect()
  createGroup$ = this.action$.pipe(
    ofType(groupActions.GroupActionTypes.CreateGroup),
    map((action: groupActions.CreateGroup) => action.payload),
    switchMap(group => {
      return this.groupService.createCommu(group).pipe(
        map(group => new groupActions.CreateGroupSuccess(group)),
        catchError(error => of(new groupActions.CreateGroupFail(error)))
      );
    })
  );

  @Effect()
  createGroupSuccess$ = this.action$.pipe(
    ofType(groupActions.GroupActionTypes.CreateGroupSuccess),
    map((action: groupActions.CreateGroupSuccess) => action.payload),
    map(group => {
      return new fromRoot.Go({
        path: ['/community', group._id],
      });
    })
  );

  @Effect()
  updateGroup$ = this.action$.pipe(
    ofType(groupActions.GroupActionTypes.UpdateGroup),
    map((action: groupActions.UpdateGroup) => action.payload),
    switchMap(group => {
      return this.groupService.updateCommu(group).pipe(
        map(group => new groupActions.UpdateGroupSuccess(group)),
        catchError(error => of(new groupActions.UpdateGroupFail(error)))
      );
    })
  );

  @Effect()
  removeGroup$ = this.action$.pipe(
    ofType(groupActions.GroupActionTypes.RemoveGroup),
    map((action: groupActions.RemoveGroup) => action.payload),
    switchMap(group => {
      return this.groupService.removeCommu(group).pipe(
        map(() => new groupActions.RemoveGroupSuccess(group)),
        catchError(error => of(new groupActions.RemoveGroupFail(error)))
      );
    })
  );

  @Effect()
  removeMember$ = this.action$.pipe(
    ofType(groupActions.GroupActionTypes.RemoveMember),
    map((action: groupActions.RemoveMember) => action.payload),
    switchMap((payload: any) => {
      console.log(payload);
      return this.groupService
        .removeMember(payload.groupId, payload.userId)
        .pipe(
          map(group => new groupActions.RemoveMemberSuccess(group)),
          catchError(error => of(new groupActions.RemoveMemberFail(error)))
        );
    })
  );

  @Effect()
  handleGroupSuccess$ = this.action$.pipe(
    ofType(
      groupActions.GroupActionTypes.UpdateGroupSuccess,
      groupActions.GroupActionTypes.RemoveGroupSuccess
    ),
    map(() => {
      return new fromRoot.Go({
        path: ['/community'],
      });
    })
  );
}
