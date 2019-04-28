import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';
import * as fromGroups from './groups.reducer';
import * as fromPreOrders from './pre-order.reducer';
import * as fromProducts from './products.reducer';
import * as fromOrders from './orders.reducer';
import * as fromSearch from './search.reducer';

export interface CoreState {
  auth: fromAuth.AuthState;
  groups: fromGroups.GroupState;
  preOrders: fromPreOrders.PreOrderState;
  products: fromProducts.ProductState;
  orders: fromOrders.OrderState;
  search: fromSearch.State;
}

export const reducers: ActionReducerMap<CoreState> = {
  auth: fromAuth.reducer,
  groups: fromGroups.reducer,
  preOrders: fromPreOrders.reducer,
  products: fromProducts.reducer,
  orders: fromOrders.reducer,
  search: fromSearch.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');
