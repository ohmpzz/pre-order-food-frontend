import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as orderActions from '../actions/orders.action';
import * as fromServices from '../../services';
import { Order } from '@app/core/models/order.model';

@Injectable()
export class OrderEffects {
  constructor(
    private action$: Actions,
    private orderService: fromServices.OrderService
  ) {}

  @Effect()
  loadOrdersByPreOrderId$ = this.action$.pipe(
    ofType(orderActions.OrderActionTypes.LoadOrders),
    map((action: orderActions.LoadOrders) => action.payload),
    switchMap(id => {
      return this.orderService.getOrdersByPreOrderId(id).pipe(
        map(orders => new orderActions.LoadOrdersSuccess(orders)),
        catchError(error => of(new orderActions.LoadOrdersFail(error)))
      );
    })
  );

  @Effect()
  loadOrdersByOwner$ = this.action$.pipe(
    ofType(orderActions.OrderActionTypes.LoadOrdersByOwner),
    switchMap(() => {
      return this.orderService.getOrdersByOwner().pipe(
        map(orders => new orderActions.LoadOrdersByOwnerSuccess(orders)),
        catchError(error => of(new orderActions.LoadOrdersByOwnerFail(error)))
      );
    })
  );

  @Effect()
  cancelOrderById$ = this.action$.pipe(
    ofType(orderActions.OrderActionTypes.CancelOrderById),
    map((action: orderActions.CancelOrderById) => action.payload),
    switchMap(id => {
      return this.orderService.cancelOrder(id).pipe(
        map(() => new orderActions.LoadOrdersByOwner()),
        catchError(error => of(new orderActions.CancelOrderByIdFail(error)))
      );
    })
  );

  @Effect()
  updateOrderById$ = this.action$.pipe(
    ofType(orderActions.OrderActionTypes.UpdateOrderById),
    map((action: orderActions.UpdateOrderById) => action.payload),
    switchMap((order: Order) => {
      return this.orderService
        .updateOrderStatus({ _id: order._id, status: order.status })
        .pipe(
          map(() => new orderActions.LoadOrders(order.preOrder._id)),
          catchError(error => of(new orderActions.CancelOrderByIdFail(error)))
        );
    })
  );

  // @Effect()
  // loadOrderById$ = this.action$.pipe(
  //   ofType(orderActions.OrderActionTypes.LoadOrderById),
  //   map((action: orderActions.LoadOrderById) => action.payload),
  //   switchMap(id => {
  //     return this.orderService.getOrderById(id).pipe(
  //       map(
  //         Orders => new orderActions.LoadOrderByIdSuccess(Orders)
  //       ),
  //       catchError(error => of(new orderActions.LoadOrderByIdFail(error)))
  //     );
  //   })
  // );
}
