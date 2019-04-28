import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromGroup from '../reducers/groups.reducer';

export const getGroupState = createSelector(
  fromFeature.getLandingPageState,
  (state: fromFeature.LandingPageState) => state.group
);

export const getGroupEntities = createSelector(
  getGroupState,
  fromGroup.getGroupEntities
);

export const getAllGroups = createSelector(
  getGroupEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getGroupLoaded = createSelector(
  getGroupState,
  fromGroup.getGroupLoaded
);

export const getGroupLoading = createSelector(
  getGroupState,
  fromGroup.getGroupLoading
);
