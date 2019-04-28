import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as searchActions from '../actions/search.action';
import * as fromServices from '../../services';

@Injectable()
export class SearchEffects {
  constructor(
    private action$: Actions,
    private findUserService: fromServices.FindUserService
  ) {}

  @Effect()
  searchUser$ = this.action$.pipe(
    ofType(searchActions.SearchActionTypes.Search),
    map((action: searchActions.Search) => action.payload),
    switchMap(payload => {
      return this.findUserService.findUser(payload).pipe(
        map(users => new searchActions.SearchSuccess(users)),
        catchError(error => of(new searchActions.SearchFail(error)))
      );
    })
  );
}
