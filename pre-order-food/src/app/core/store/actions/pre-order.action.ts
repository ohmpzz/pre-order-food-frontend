import { Action } from '@ngrx/store';

import { PreOrders } from '../../models/pre-order.model';

export enum PreOrderActionTypes {
  LoadPreOrders = '[Core] Load PreOrders',
  LoadPreOrdersFail = '[Core] Load PreOrders Fail',
  LoadPreOrdersSuccess = '[Core] Load PreOrders Success',
  LoadPreOrderById = '[Core] Load PreOrder By Id',
  LoadPreOrderByIdFail = '[Core] Load PreOrder By Id Fail',
  LoadPreOrderByIdSuccess = '[Core] Load PreOrder By Id Success',
  LoadPreOrdersByOwner = '[Core] Load PreOrders By Owner',
  LoadPreOrdersByOwnerFail = '[Core] Load PreOrders By Owner Fail',
  LoadPreOrdersByOwnerSuccess = '[Core] Load PreOrders By Owner Success',
  RemovePreOrderByOwner = '[Core] Remove PreOrder By Owner',
  RemovePreOrderByOwnerFail = '[Core] Remove PreOrder By Owner Fail',
  RemovePreOrderByOwnerSuccess = '[Core] Remove PreOrder By Owner Success',
}

export class LoadPreOrders implements Action {
  readonly type = PreOrderActionTypes.LoadPreOrders;
  constructor(public payload: string) {}
}

export class LoadPreOrdersFail implements Action {
  readonly type = PreOrderActionTypes.LoadPreOrdersFail;
  constructor(public payload: any) {}
}

export class LoadPreOrdersSuccess implements Action {
  readonly type = PreOrderActionTypes.LoadPreOrdersSuccess;
  constructor(public payload: PreOrders[]) {}
}

// load PreOrder by id
export class LoadPreOrderById implements Action {
  readonly type = PreOrderActionTypes.LoadPreOrderById;
  constructor(public payload: string) {}
}
export class LoadPreOrderByIdFail implements Action {
  readonly type = PreOrderActionTypes.LoadPreOrderByIdFail;
  constructor(public payload: any) {}
}
export class LoadPreOrderByIdSuccess implements Action {
  readonly type = PreOrderActionTypes.LoadPreOrderByIdSuccess;
  constructor(public payload: PreOrders) {}
}

export class LoadPreOrdersByOwner implements Action {
  readonly type = PreOrderActionTypes.LoadPreOrdersByOwner;
}

export class LoadPreOrdersByOwnerFail implements Action {
  readonly type = PreOrderActionTypes.LoadPreOrdersByOwnerFail;
  constructor(public payload: any) {}
}

export class LoadPreOrdersByOwnerSuccess implements Action {
  readonly type = PreOrderActionTypes.LoadPreOrdersByOwnerSuccess;
  constructor(public payload: PreOrders[]) {}
}

// remove by owner
export class RemovePreOrderByOwner implements Action {
  readonly type = PreOrderActionTypes.RemovePreOrderByOwner;
  constructor(public payload: PreOrders) {}
}

export class RemovePreOrderByOwnerFail implements Action {
  readonly type = PreOrderActionTypes.RemovePreOrderByOwnerFail;
  constructor(public payload: any) {}
}

export class RemovePreOrderByOwnerSuccess implements Action {
  readonly type = PreOrderActionTypes.RemovePreOrderByOwnerSuccess;
  constructor(public payload: PreOrders) {}
}

export type PreOrderAction =
  | LoadPreOrders
  | LoadPreOrdersFail
  | LoadPreOrdersSuccess
  | LoadPreOrderById
  | LoadPreOrderByIdFail
  | LoadPreOrderByIdSuccess
  | LoadPreOrdersByOwner
  | LoadPreOrdersByOwnerFail
  | LoadPreOrdersByOwnerSuccess
  | RemovePreOrderByOwner
  | RemovePreOrderByOwnerFail
  | RemovePreOrderByOwnerSuccess;
