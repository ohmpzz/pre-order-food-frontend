import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromLastPreorder from '../reducers/last-preorder.reducer';

export const getLastPreorderState = createSelector(
  fromFeature.getLandingPageState,
  (state: fromFeature.LandingPageState) => state.lastPreorder
);

export const getLastPreorderEntities = createSelector(
  getLastPreorderState,
  fromLastPreorder.getLastPreorderEntities
);

export const getAllLastPreorder = createSelector(
  getLastPreorderEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getLastPreorderLoaded = createSelector(
  getLastPreorderState,
  fromLastPreorder.getLastPreorderLoaded
);

export const getLastPreorderLoading = createSelector(
  getLastPreorderState,
  fromLastPreorder.getLastPreorderLoading
);
