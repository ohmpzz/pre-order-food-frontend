import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  LoadAuthsFail = '[Auth] Load Auths Fail',
  LoadAuthsSuccess = '[Auth] Load Auths Success',
  Login = '[Auth] Login',
  LoginFail = '[Auth] Login Fail',
  LoginSuccess = '[Auth] Login Success',
  Logout = '[Auth] Logout',
  LogoutFail = '[Auth] Logout Fail',
  LogoutSuccess = '[Auth] Logout Success',
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export class LoadAuthsFail implements Action {
  readonly type = AuthActionTypes.LoadAuthsFail;
  constructor(public payload: any) {}
}

export class LoadAuthsSuccess implements Action {
  readonly type = AuthActionTypes.LoadAuthsSuccess;
  constructor(public payload: User) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { email: string; password: string }) {}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutFail implements Action {
  readonly type = AuthActionTypes.LogoutFail;
  constructor(public payload: any) {}
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
  constructor(public payload: any) {}
}

export type AuthActions =
  | LoadAuths
  | LoadAuthsFail
  | LoadAuthsSuccess
  | Login
  | LoginFail
  | LoginSuccess
  | Logout
  | LogoutFail
  | LogoutSuccess;
