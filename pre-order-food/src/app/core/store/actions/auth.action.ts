import { Action } from '@ngrx/store';

import { AuthData } from '../../models/auth.model';

export enum AuthActionTypes {
  AddPhoneNumber = '[Core] Add Phone Number',
  AddPhoneNumberFail = '[Core] Add Phone Number Fail',
  AddPhoneNumberSuccess = '[Core] Add Phone Number Success',
  LOGIN_LINE = '[Auth API] Login LINE',
  LOGIN_LINE_FAIL = '[Auth API] Login LINE Fail',
  LOGIN_LINE_SUCCESS = '[Auth API] Login LINE Success',
  LOGOUT = '[Auth API] Logout',
  LOGOUT_FAIL = '[Auth API] Logout Fail',
  LOGOUT_SUCCESS = '[Auth API] Logout Success',
  UPDATE_USER = '[Auth] Update User',
  UPDATE_USER_FAIL = '[Auth] Update User Fail',
  UPDATE_USER_SUCCESS = '[Auth] Update User Success',
}

export class AddPhoneNumber implements Action {
  readonly type = AuthActionTypes.AddPhoneNumber;
  constructor(public payload: AuthData) {}
}
export class AddPhoneNumberFail implements Action {
  readonly type = AuthActionTypes.AddPhoneNumberFail;
  constructor(public payload: any) {}
}
export class AddPhoneNumberSuccess implements Action {
  readonly type = AuthActionTypes.AddPhoneNumberSuccess;
  constructor(public payload: AuthData) {}
}

// login LINE
export class LoginLine implements Action {
  readonly type = AuthActionTypes.LOGIN_LINE;
}

// logout
export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class LogoutFail implements Action {
  readonly type = AuthActionTypes.LOGOUT_FAIL;
  constructor(public payload: any) {}
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: any) {}
}

// update user
export class UpdateUser implements Action {
  readonly type = AuthActionTypes.UPDATE_USER;
}

export class UpdateUserFail implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_FAIL;
  constructor(public payload: any) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_SUCCESS;
  constructor(public payload: AuthData) {}
}

export type AuthAction =
  | AddPhoneNumber
  | AddPhoneNumberFail
  | AddPhoneNumberSuccess
  | LoginLine
  | Logout
  | LogoutFail
  | LogoutSuccess
  | UpdateUser
  | UpdateUserFail
  | UpdateUserSuccess;
