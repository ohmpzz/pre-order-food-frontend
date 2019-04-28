import * as fromPreorder from '../actions/preorder.action';
import { Product } from '../../models/product.model';
import { PreOrders } from '@app/core/models/pre-order.model';

export interface LastPreorderState {
  entities: { [id: number]: PreOrders };
  loaded: boolean;
  loading: boolean;
}

export const initialState: LastPreorderState = {
  entities: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPreorder.PreordersAction
): LastPreorderState {
  switch (action.type) {
    case fromPreorder.PreordersActionTypes.LoadLastPreorder: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromPreorder.PreordersActionTypes.LoadLastPreorderFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
    case fromPreorder.PreordersActionTypes.LoadLastPreorderSuccess: {
      const preorders = action.payload;

      const entities = preorders.reduce(
        (entities: { [id: number]: PreOrders }, product: PreOrders) => {
          return {
            ...entities,
            [product._id]: product,
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
  }

  return state;
}

export const getLastPreorderEntities = (state: LastPreorderState) =>
  state.entities;
export const getLastPreorderLoaded = (state: LastPreorderState) => state.loaded;
export const getLastPreorderLoading = (state: LastPreorderState) =>
  state.loading;
