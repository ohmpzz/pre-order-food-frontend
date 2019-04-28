import * as fromPreorder from '../actions/preorder.action';
import { PreOrders } from '@app/core/models/pre-order.model';

export interface OwnCommuPreorder {
  entities: { [id: number]: PreOrders };
  loaded: boolean;
  loading: boolean;
}

export const initialState: OwnCommuPreorder = {
  entities: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPreorder.PreordersAction
): OwnCommuPreorder {
  switch (action.type) {
    case fromPreorder.PreordersActionTypes.LoadOwnCommunityPreorder: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromPreorder.PreordersActionTypes.LoadOwnCommunityPreorderFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
    case fromPreorder.PreordersActionTypes.LoadOwnCommunityPreorderSuccess: {
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

export const getOwnCommuPreorderEntities = (state: OwnCommuPreorder) =>
  state.entities;
export const getOwnCommuPreorderLoaded = (state: OwnCommuPreorder) =>
  state.loaded;
export const getOwnCommuPreorderLoading = (state: OwnCommuPreorder) =>
  state.loading;
