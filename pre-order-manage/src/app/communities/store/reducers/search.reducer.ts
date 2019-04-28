import * as fromSearch from '../actions/search.action';
import { User } from '../../models/user.model';

export interface State {
  entities: { [id: number]: User };
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
        (entities: { [id: number]: User }, user: User) => {
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
