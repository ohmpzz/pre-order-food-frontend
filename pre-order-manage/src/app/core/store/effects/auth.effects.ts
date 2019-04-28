import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import * as fromRoot from '@app/store';
import * as authActions from '../actions/auth.actions';
import * as fromServices from '../../services';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: fromServices.AuthService
  ) {}

  @Effect()
  loadAuth$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap(() => {
      return this.authService.loadAuth().pipe(
        map(user => new authActions.LoadAuthsSuccess(user)),
        catchError(error => of(new authActions.LoadAuthsFail(error)))
      );
    })
  );

  @Effect()
  loadAuthFail$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuthsFail),
    map(() => new fromRoot.Go({ path: ['/login'] }))
  );

  // @Effect()
  // loadAuthSuccess$ = this.actions$.pipe(
  //   ofType(authActions.AuthActionTypes.LoadAuthsSuccess),
  //   map(() => {
  //     console.log('load success');
  //     return new fromRoot.Go({ path: ['/community'] });
  //   })
  // );

  @Effect()
  login$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Login),
    map((action: authActions.Login) => action.payload),
    switchMap((user: { email: string; password: string }) => {
      return this.authService.login(user).pipe(
        map((user: any) => {
          if (!user.success) {
            alert(user.msg);
            return new authActions.LoginFail(user);
          } else {
            return new authActions.LoginSuccess();
          }
        }),
        catchError(error => of(new authActions.LoginFail(error)))
      );
    })
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoginSuccess),
    map(() => {
      return new fromRoot.Go({
        path: ['/community'],
      });
    })
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Logout),
    switchMap(() => {
      return this.authService.logout().pipe(
        map(() => new authActions.LogoutSuccess(null)),
        catchError(error => of(new authActions.LogoutFail(error)))
      );
    })
  );

  @Effect()
  logoutSuccess$ = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LogoutSuccess),
    map(() => {
      return new fromRoot.Go({
        path: ['/login'],
      });
    })
  );
}
