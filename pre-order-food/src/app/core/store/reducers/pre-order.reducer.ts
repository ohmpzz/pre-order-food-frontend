import * as fromPreOrders from '../actions/pre-order.action';
import { PreOrders } from '../../models/pre-order.model';

export interface PreOrderState {
  entities: { [id: number]: PreOrders };
  loaded: boolean;
  loading: boolean;
  loadedById: boolean;
  loadingById: boolean;
}

export const initialState: PreOrderState = {
  entities: [],
  loaded: false,
  loading: false,
  loadedById: false,
  loadingById: false,
};

export function reducer(
  state = initialState,
  action: fromPreOrders.PreOrderAction
): PreOrderState {
  switch (action.type) {
    case fromPreOrders.PreOrderActionTypes.LoadPreOrderById: {
      return {
        ...state,
        loadingById: true,
      };
    }

    case fromPreOrders.PreOrderActionTypes.LoadPreOrders: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPreOrders.PreOrderActionTypes.LoadPreOrderByIdFail: {
      return {
        ...state,
        loadedById: false,
        loadingById: false,
      };
    }
    case fromPreOrders.PreOrderActionTypes.LoadPreOrdersFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromPreOrders.PreOrderActionTypes.LoadPreOrdersByOwnerSuccess:
    case fromPreOrders.PreOrderActionTypes.LoadPreOrdersSuccess: {
      const preOrder = action.payload;

      const entities = preOrder.reduce(
        (entities: { [id: number]: PreOrders }, preOrder: PreOrders) => {
          return {
            ...entities,
            [preOrder._id]: preOrder,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }

    case fromPreOrders.PreOrderActionTypes.LoadPreOrderByIdSuccess: {
      const preOrder = action.payload;
      const entities = { ...state.entities, [preOrder._id]: preOrder };

      return {
        ...state,
        loadedById: true,
        loadingById: false,
        entities,
      };
    }

    case fromPreOrders.PreOrderActionTypes.RemovePreOrderByOwnerSuccess: {
      const preOrder = action.payload;
      console.log(state.entities);
      console.log(preOrder);
      const { [preOrder._id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}

export const getPreOrdersEntities = (state: PreOrderState) => state.entities;
export const getPreOrdersLoaded = (state: PreOrderState) => state.loaded;
export const getPreOrdersLoading = (state: PreOrderState) => state.loading;
export const getPreOrdersLoadedById = (state: PreOrderState) =>
  state.loadedById;
export const getPreOrdersLoadingById = (state: PreOrderState) =>
  state.loadingById;
