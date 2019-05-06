import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';

export enum AuthActionTypes {
  AddPhoneNumber = '[Core] Add Phone Number',
  AddPhoneNumberFail = '[Core] Add Phone Number Fail',
  AddPhoneNumberSuccess = '[Core] Add Phone Number Success',
}

export class AddPhoneNumber implements Action {
  readonly type = AuthActionTypes.AddPhoneNumber;
  constructor(public payload: User) {}
}
export class AddPhoneNumberFail implements Action {
  readonly type = AuthActionTypes.AddPhoneNumberFail;
  constructor(public payload: any) {}
}
export class AddPhoneNumberSuccess implements Action {
  readonly type = AuthActionTypes.AddPhoneNumberSuccess;
  constructor(public payload: User) {}
}

export type AuthAction =
  | AddPhoneNumber
  | AddPhoneNumberFail
  | AddPhoneNumberSuccess;
