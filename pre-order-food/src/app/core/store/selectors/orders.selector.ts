import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromOrders from '../reducers/orders.reducer';

import { Order } from '../../models/order.model';

export const getOrderState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => {
    return state.orders;
  }
);

export const getOrdersEntities = createSelector(
  getOrderState,
  fromOrders.getOrdersEntities
);

export const getAllOrders = createSelector(
  getOrdersEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getOrdersLoaded = createSelector(
  getOrderState,
  fromOrders.getOrdersLoaded
);

export const getOrdersLoading = createSelector(
  getOrderState,
  fromOrders.getOrdersLoading
);
