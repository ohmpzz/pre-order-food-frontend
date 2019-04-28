import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromPreOrders from '../reducers/pre-order.reducer';

import { PreOrders } from '../../models/pre-order.model';

export const getPreOrderState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => {
    return state.preOrders;
  }
);

export const getPreOrdersEntities = createSelector(
  getPreOrderState,
  fromPreOrders.getPreOrdersEntities
);

export const getSelectedPreOrder = createSelector(
  getPreOrdersEntities,
  fromRoot.getRouterState,
  (entities, router): PreOrders => {
    const param: string = router.state.params.preOrderId;
    let id = null;
    if (param) {
      id = param
        .match(/(\w+)$/gi)
        .toString()
        .trim();
    }

    return router.state && entities[id];
  }
);

export const getAllPreOrders = createSelector(
  getPreOrdersEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getPreOrdersLoaded = createSelector(
  getPreOrderState,
  fromPreOrders.getPreOrdersLoaded
);

export const getPreOrdersLoading = createSelector(
  getPreOrderState,
  fromPreOrders.getPreOrdersLoading
);

export const getPreOrdersLoadedById = createSelector(
  getPreOrderState,
  fromPreOrders.getPreOrdersLoadedById
);

export const getPreOrdersLoadingById = createSelector(
  getPreOrderState,
  fromPreOrders.getPreOrdersLoadingById
);
