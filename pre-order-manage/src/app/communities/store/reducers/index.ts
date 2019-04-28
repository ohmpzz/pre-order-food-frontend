import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromGroups from './group.reducer';
import * as fromSearch from './search.reducer';
import * as fromUpload from './upload.reducer';

export interface CommuState {
  groups: fromGroups.State;
  search: fromSearch.State;
  upload: fromUpload.State;
}

export const reducers: ActionReducerMap<CommuState> = {
  groups: fromGroups.reducer,
  search: fromSearch.reducer,
  upload: fromUpload.reducer,
};

export const getCommuState = createFeatureSelector<CommuState>('communities');
