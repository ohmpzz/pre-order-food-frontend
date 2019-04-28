import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as preOrderActions from '../actions/pre-order.action';
import * as fromServices from '../../services';
import { PreOrders } from '@app/core/models/pre-order.model';

@Injectable()
export class PreOrderEffects {
  constructor(
    private action$: Actions,
    private preOrderService: fromServices.PreOrderService
  ) {}

  @Effect()
  loadPreOrders$ = this.action$.pipe(
    ofType(preOrderActions.PreOrderActionTypes.LoadPreOrders),
    map((action: preOrderActions.LoadPreOrders) => action.payload),
    switchMap(id => {
      return this.preOrderService.getPreOrderByGroupId(id).pipe(
        map(preOrders => new preOrderActions.LoadPreOrdersSuccess(preOrders)),
        catchError(error => of(new preOrderActions.LoadPreOrdersFail(error)))
      );
    })
  );

  @Effect()
  loadPreOrdersByOwner$ = this.action$.pipe(
    ofType(preOrderActions.PreOrderActionTypes.LoadPreOrdersByOwner),
    switchMap(() => {
      return this.preOrderService.getOwnPreOrders().pipe(
        map(
          payload => new preOrderActions.LoadPreOrdersByOwnerSuccess(payload)
        ),
        catchError(error =>
          of(new preOrderActions.LoadPreOrdersByOwnerFail(error))
        )
      );
    })
  );

  @Effect()
  removePreOrderByOwner$ = this.action$.pipe(
    ofType(preOrderActions.PreOrderActionTypes.RemovePreOrderByOwner),
    map((action: preOrderActions.RemovePreOrderByOwner) => action.payload),
    switchMap((preOrder: PreOrders) => {
      return this.preOrderService.removeOwnPreOrderById(preOrder._id).pipe(
        map(() => new preOrderActions.RemovePreOrderByOwnerSuccess(preOrder)),
        catchError(error =>
          of(new preOrderActions.RemovePreOrderByOwnerFail(error))
        )
      );
    })
  );

  @Effect()
  removePreOrderByOwnerSuccess = this.action$.pipe(
    ofType(preOrderActions.PreOrderActionTypes.RemovePreOrderByOwnerSuccess),
    map(() => new preOrderActions.LoadPreOrdersByOwner())
  );

  @Effect()
  loadPreOrderById$ = this.action$.pipe(
    ofType(preOrderActions.PreOrderActionTypes.LoadPreOrderById),
    map((action: preOrderActions.LoadPreOrderById) => action.payload),
    switchMap(id => {
      return this.preOrderService.getPreOrderById(id).pipe(
        map(
          preOrders => new preOrderActions.LoadPreOrderByIdSuccess(preOrders)
        ),
        catchError(error => of(new preOrderActions.LoadPreOrderByIdFail(error)))
      );
    })
  );
}
