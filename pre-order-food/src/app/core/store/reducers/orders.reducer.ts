import * as fromOrders from '../actions/orders.action';
import { Order } from '../../models/order.model';

export interface OrderState {
  entities: { [id: number]: Order };
  loaded: boolean;
  loading: boolean;
}

export const initialState: OrderState = {
  entities: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromOrders.OrderAction
): OrderState {
  switch (action.type) {
    case fromOrders.OrderActionTypes.LoadOrdersByOwner:
    case fromOrders.OrderActionTypes.LoadOrders: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromOrders.OrderActionTypes.LoadOrdersByOwnerFail:
    case fromOrders.OrderActionTypes.LoadOrdersFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromOrders.OrderActionTypes.LoadOrdersByOwnerSuccess:
    case fromOrders.OrderActionTypes.LoadOrdersSuccess: {
      const orders = action.payload;

      const entities = orders.reduce(
        (entitie: { [id: number]: Order }, order: Order) => {
          return {
            ...entitie,
            [order._id]: order,
          };
        },
        {}
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }
  }

  return state;
}

export const getOrdersEntities = (state: OrderState) => state.entities;
export const getOrdersLoaded = (state: OrderState) => state.loaded;
export const getOrdersLoading = (state: OrderState) => state.loading;
