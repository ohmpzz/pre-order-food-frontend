import * as fromSearch from '../actions/search.action';
import { AuthData } from '../../models/auth.model';

export interface State {
  entities: { [id: number]: AuthData };
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  entities: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromSearch.SearchActions
): State {
  switch (action.type) {
    case fromSearch.SearchActionTypes.Search: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromSearch.SearchActionTypes.SearchFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromSearch.SearchActionTypes.SearchSuccess: {
      const users = action.payload;
      const entities = users.reduce(
        (entities: { [id: number]: AuthData }, user: AuthData) => {
          return { ...entities, [user._id]: user };
        },
        { ...state.entities }
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

export const getSearchEntities = (state: State) => state.entities;
export const getSearchLoaded = (state: State) => state.loaded;
export const getsearchLoading = (state: State) => state.loading;
