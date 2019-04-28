import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromServices from '../../services';

import * as preorderActions from '../actions/preorder.action';

@Injectable()
export class PreoderEffect {
  constructor(
    private action$: Actions,
    private productsService: fromServices.ProductsService
  ) {}

  @Effect()
  loadLastPreorder$ = this.action$.pipe(
    ofType(preorderActions.PreordersActionTypes.LoadLastPreorder),
    switchMap(() => {
      return this.productsService.getLastProducts().pipe(
        map(products => new preorderActions.LoadLastPreorderSuccess(products)),
        catchError(error => of(new preorderActions.LoadLastPreorderFail(error)))
      );
    })
  );

  @Effect()
  loadOwnCommunityPreorder$ = this.action$.pipe(
    ofType(preorderActions.PreordersActionTypes.LoadOwnCommunityPreorder),
    switchMap(() => {
      return this.productsService.getOwnCommunityPreorder().pipe(
        map(
          products =>
            new preorderActions.LoadOwnCommunityPreorderSuccess(products)
        ),
        catchError(error =>
          of(new preorderActions.LoadOwnCommunityPreorderFail(error))
        )
      );
    })
  );
}
