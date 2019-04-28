import * as fromProducts from '../actions/products.action';
import { Product } from '../../models/product.model';

export interface ProductState {
  entities: { [id: number]: Product };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProductState = {
  entities: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromProducts.ProductsAction
): ProductState {
  switch (action.type) {
    case fromProducts.ProductsActionTypes.LoadProductById:
    case fromProducts.ProductsActionTypes.LoadProducts: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromProducts.ProductsActionTypes.LoadProductByIdFail:
    case fromProducts.ProductsActionTypes.LoadProductsFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromProducts.ProductsActionTypes.LoadProductsSuccess: {
      const products = action.payload;

      const entities = products.reduce(
        (entities: { [id: number]: Product }, product: Product) => {
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

    case fromProducts.ProductsActionTypes.LoadProductByIdSuccess: {
      const product = action.payload;

      const entities = { ...state.entities, [product._id]: product };

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

export const getProductsEntities = (state: ProductState) => state.entities;
export const getProductsLoaded = (state: ProductState) => state.loaded;
export const getProductsLoading = (state: ProductState) => state.loading;
