import { Action } from '@ngrx/store';

import { PreOrders } from '@app/core/models/pre-order.model';

export enum PreordersActionTypes {
  LoadLastPreorder = '[Landing-page] Load Last Preorder',
  LoadLastPreorderFail = '[Landing-page] Load Last Preorder Fail',
  LoadLastPreorderSuccess = '[Landing-page] Load Last Preorder Success',
  LoadOwnCommunityPreorder = '[Landing-page] Load Own Community Preorder',
  LoadOwnCommunityPreorderFail = '[Landing-page] Load Own Community Preorder Fail',
  LoadOwnCommunityPreorderSuccess = '[Landing-page] Load Own Community Preorder Success',
}

// Load Last Preorder
export class LoadLastPreorder implements Action {
  readonly type = PreordersActionTypes.LoadLastPreorder;
}
export class LoadLastPreorderFail implements Action {
  readonly type = PreordersActionTypes.LoadLastPreorderFail;
  constructor(public payload: any) {}
}
export class LoadLastPreorderSuccess implements Action {
  readonly type = PreordersActionTypes.LoadLastPreorderSuccess;
  constructor(public payload: PreOrders[]) {}
}

// Load own community preorder
export class LoadOwnCommunityPreorder implements Action {
  readonly type = PreordersActionTypes.LoadOwnCommunityPreorder;
}
export class LoadOwnCommunityPreorderFail implements Action {
  readonly type = PreordersActionTypes.LoadOwnCommunityPreorderFail;
  constructor(public payload: any) {}
}
export class LoadOwnCommunityPreorderSuccess implements Action {
  readonly type = PreordersActionTypes.LoadOwnCommunityPreorderSuccess;
  constructor(public payload: PreOrders[]) {}
}

export type PreordersAction =
  | LoadLastPreorder
  | LoadLastPreorderFail
  | LoadLastPreorderSuccess
  | LoadOwnCommunityPreorder
  | LoadOwnCommunityPreorderFail
  | LoadOwnCommunityPreorderSuccess;
