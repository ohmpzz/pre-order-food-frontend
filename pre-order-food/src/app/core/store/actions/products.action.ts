import { Action } from '@ngrx/store';

import { Product } from '../../models/product.model';

export enum ProductsActionTypes {
  LoadProducts = '[Core] Load Products',
  LoadProductsFail = '[Core] Load Products Fail',
  LoadProductsSuccess = '[Core] Load Products Success',
  LoadProductById = '[Core] Load Product By Id',
  LoadProductByIdFail = '[Core] Load Product By Id Fail',
  LoadProductByIdSuccess = '[Core] Load Product By Id Success',
  RemoveProductById = '[Core] Remove Product By Id',
  RemoveProductByIdFail = '[Core] Remove Product By Id Fail',
  RemoveProductByIdSuccess = '[Core] Remove Product By Id Success',
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
  constructor(public payload: string) {}
}

export class LoadProductsFail implements Action {
  readonly type = ProductsActionTypes.LoadProductsFail;
  constructor(public payload: any) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductsSuccess;
  constructor(public payload: Product[]) {}
}

// load Product by id
export class LoadProductById implements Action {
  readonly type = ProductsActionTypes.LoadProductById;
  constructor(public payload: any) {}
}
export class LoadProductByIdFail implements Action {
  readonly type = ProductsActionTypes.LoadProductByIdFail;
  constructor(public payload: any) {}
}
export class LoadProductByIdSuccess implements Action {
  readonly type = ProductsActionTypes.LoadProductByIdSuccess;
  constructor(public payload: Product) {}
}

export class RemoveProductById implements Action {
  readonly type = ProductsActionTypes.RemoveProductById;
  constructor(public payload: Product) {}
}
export class RemoveProductByIdFail implements Action {
  readonly type = ProductsActionTypes.RemoveProductByIdFail;
  constructor(public payload: any) {}
}
export class RemoveProductByIdSuccess implements Action {
  readonly type = ProductsActionTypes.RemoveProductByIdSuccess;
  constructor(public payload: Product) {}
}

export type ProductsAction =
  | LoadProducts
  | LoadProductsFail
  | LoadProductsSuccess
  | LoadProductById
  | LoadProductByIdFail
  | LoadProductByIdSuccess
  | RemoveProductById
  | RemoveProductByIdFail
  | RemoveProductByIdSuccess;
