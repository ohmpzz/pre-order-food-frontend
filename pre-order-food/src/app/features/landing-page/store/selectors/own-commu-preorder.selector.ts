import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromOwnCommuPreorder from '../reducers/own-commu-preoder.reducer';

export const getOwnCommuPreorderState = createSelector(
  fromFeature.getLandingPageState,
  (state: fromFeature.LandingPageState) => state.ownCommuPreorder
);

export const getOwnCommuPreorderEntities = createSelector(
  getOwnCommuPreorderState,
  fromOwnCommuPreorder.getOwnCommuPreorderEntities
);

export const getAllOwnCommuPreorder = createSelector(
  getOwnCommuPreorderEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getOwnCommuPreorderLoaded = createSelector(
  getOwnCommuPreorderState,
  fromOwnCommuPreorder.getOwnCommuPreorderLoaded
);

export const getOwnCommuPreorderLoading = createSelector(
  getOwnCommuPreorderState,
  fromOwnCommuPreorder.getOwnCommuPreorderLoading
);
