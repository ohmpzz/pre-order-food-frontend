import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSearch from '../reducers/search.reducer';

export const getSearchState = createSelector(
  fromFeature.getCommuState,
  (state: fromFeature.CommuState) => state.search
);

export const getSearchEntities = createSelector(
  getSearchState,
  fromSearch.getSearchEntities
);

export const getUsersFromSearch = createSelector(
  getSearchEntities,
  entities => Object.keys(entities).map(id => entities[id])
);

export const getSearchLoaded = createSelector(
  getSearchState,
  fromSearch.getSearchLoaded
);

export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getsearchLoading
);
