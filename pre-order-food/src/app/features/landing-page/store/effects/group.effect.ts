import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromServices from '../../services';

import * as groupActions from '../actions/group.action';

@Injectable()
export class groupEffect {
  constructor(
    private action$: Actions,
    private groupsService: fromServices.GroupsService
  ) {}

  @Effect()
  loadGroup$ = this.action$.pipe(
    ofType(groupActions.GroupActionTypes.LoadGroup),
    switchMap(() => {
      return this.groupsService.getOwnGroup().pipe(
        map(groups => new groupActions.LoadGroupSuccess(groups)),
        catchError(error =>
          of(new groupActions.LoadGroupFail(error))
        )
      );
    })
  );
}
