import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import * as authActions from '../actions';
import * as fromServices from '../../services';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: fromServices.UserService
  ) {}

  @Effect({ dispatch: false })
  addPhoneNumber$ = this.action$.pipe(
    ofType(authActions.AuthActionTypes.AddPhoneNumber),
    map((action: authActions.AddPhoneNumber) => action.payload),
    switchMap(user => {
      return this.authService.addPhoneNumber(user._id, user.phoneNumber);
    })
  );
}
