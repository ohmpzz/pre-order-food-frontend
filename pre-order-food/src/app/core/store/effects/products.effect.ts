import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as productActions from '../actions/products.action';
import * as fromServices from '../../services';

@Injectable()
export class ProductEffects {
  constructor(
    private action$: Actions,
    private productService: fromServices.ProductsService
  ) {}

  @Effect()
  loadProducts$ = this.action$.pipe(
    ofType(productActions.ProductsActionTypes.LoadProducts),
    map((action: productActions.LoadProducts) => action.payload),
    switchMap(id => {
      return this.productService.getProducts(id).pipe(
        map(products => new productActions.LoadProductsSuccess(products)),
        catchError(error => of(new productActions.LoadProductsFail(error)))
      );
    })
  );

  @Effect()
  loadProductById$ = this.action$.pipe(
    ofType(productActions.ProductsActionTypes.LoadProductById),
    map((action: productActions.LoadProductById) => action.payload),
    switchMap(id => {
      return this.productService.getProductById(id).pipe(
        map(products => new productActions.LoadProductByIdSuccess(products)),
        catchError(error => of(new productActions.LoadProductByIdFail(error)))
      );
    })
  );
}
