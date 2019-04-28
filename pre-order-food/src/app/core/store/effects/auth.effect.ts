import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as authActions from '../actions/auth.action';
import * as fromServices from '../../services';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: fromServices.AuthService
  ) {}

  @Effect({ dispatch: false })
  addPhoneNumber$ = this.action$.pipe(
    ofType(authActions.AuthActionTypes.AddPhoneNumber),
    map((action: authActions.AddPhoneNumber) => action.payload),
    switchMap(user => {
      return this.authService.addPhoneNumber(user._id, user.phoneNumber);
    })
  );

  @Effect({ dispatch: false })
  loginLine$ = this.action$.pipe(
    ofType(authActions.AuthActionTypes.LOGIN_LINE),
    switchMap(() => {
      return this.authService.lineLogin();
    })
  );

  @Effect()
  logout$ = this.action$.pipe(
    ofType(authActions.AuthActionTypes.LOGOUT),
    switchMap(() => {
      return this.authService.lineLogout().pipe(
        map(() => new authActions.LogoutSuccess(null)),
        catchError(error => of(new authActions.LogoutFail(error)))
      );
    })
  );

  @Effect()
  updateUser$ = this.action$.pipe(
    ofType(
      authActions.AuthActionTypes.UPDATE_USER,
      authActions.AuthActionTypes.LOGOUT_SUCCESS
    ),
    switchMap(() => {
      this.authService.updateUserData();
      return this.authService.userData.pipe(
        map(user => new authActions.UpdateUserSuccess(user)),
        catchError(error => of(new authActions.UpdateUserFail(error)))
      );
    })
  );
}
