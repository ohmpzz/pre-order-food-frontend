import { Action } from '@ngrx/store';

import { Order } from '../../models/order.model';

export enum OrderActionTypes {
  LoadOrders = '[Core] Load Orders',
  LoadOrdersFail = '[Core] Load Orders Fail',
  LoadOrdersSuccess = '[Core] Load Orders Success',
  LoadOrderById = '[Core] Load Order By Id',
  LoadOrderByIdFail = '[Core] Load Order By Id Fail',
  LoadOrderByIdSuccess = '[Core] Load Order By Id Success',
  LoadOrdersByOwner = '[Core] Load Orders Owner',
  LoadOrdersByOwnerFail = '[Core] Load Orders Owner Fail',
  LoadOrdersByOwnerSuccess = '[Core] Load Orders Owner Success',
  CancelOrderById = '[Core] Cancel Order Id',
  CancelOrderByIdFail = '[Core] Cancel Order Id Fail',
  CancelOrderByIdSuccess = '[Core] Cancel Order Id Success',
  UpdateOrderById = '[Core] Update Order Id',
  UpdateOrderByIdFail = '[Core] Update Order Id Fail',
  UpdateOrderByIdSuccess = '[Core] Update Order Id Success',
}

export class LoadOrders implements Action {
  readonly type = OrderActionTypes.LoadOrders;
  constructor(public payload: string) {}
}

export class LoadOrdersFail implements Action {
  readonly type = OrderActionTypes.LoadOrdersFail;
  constructor(public payload: any) {}
}

export class LoadOrdersSuccess implements Action {
  readonly type = OrderActionTypes.LoadOrdersSuccess;
  constructor(public payload: Order[]) {}
}

// load Order by id
export class LoadOrderById implements Action {
  readonly type = OrderActionTypes.LoadOrderById;
  constructor(public payload: string) {}
}
export class LoadOrderByIdFail implements Action {
  readonly type = OrderActionTypes.LoadOrderByIdFail;
  constructor(public payload: any) {}
}
export class LoadOrderByIdSuccess implements Action {
  readonly type = OrderActionTypes.LoadOrderByIdSuccess;
  constructor(public payload: Order) {}
}

// load owner orders
export class LoadOrdersByOwner implements Action {
  readonly type = OrderActionTypes.LoadOrdersByOwner;
}

export class LoadOrdersByOwnerFail implements Action {
  readonly type = OrderActionTypes.LoadOrdersByOwnerFail;
  constructor(public payload: any) {}
}

export class LoadOrdersByOwnerSuccess implements Action {
  readonly type = OrderActionTypes.LoadOrdersByOwnerSuccess;
  constructor(public payload: Order[]) {}
}

export class CancelOrderById implements Action {
  readonly type = OrderActionTypes.CancelOrderById;
  constructor(public payload: string) {}
}

export class CancelOrderByIdFail implements Action {
  readonly type = OrderActionTypes.CancelOrderByIdFail;
  constructor(public payload: any) {}
}

export class CancelOrderByIdSuccess implements Action {
  readonly type = OrderActionTypes.CancelOrderByIdSuccess;
  constructor(public payload: Order) {}
}

export class UpdateOrderById implements Action {
  readonly type = OrderActionTypes.UpdateOrderById;
  constructor(public payload: Order) {}
}

export class UpdateOrderByIdFail implements Action {
  readonly type = OrderActionTypes.UpdateOrderByIdFail;
  constructor(public payload: any) {}
}

export class UpdateOrderByIdSuccess implements Action {
  readonly type = OrderActionTypes.UpdateOrderByIdSuccess;
  constructor(public payload: Order) {}
}

export type OrderAction =
  | LoadOrders
  | LoadOrdersFail
  | LoadOrdersSuccess
  | LoadOrderById
  | LoadOrderByIdFail
  | LoadOrderByIdSuccess
  | LoadOrdersByOwner
  | LoadOrdersByOwnerFail
  | LoadOrdersByOwnerSuccess
  | CancelOrderById
  | CancelOrderByIdFail
  | CancelOrderByIdSuccess
  | UpdateOrderById
  | UpdateOrderByIdFail
  | UpdateOrderByIdSuccess;
