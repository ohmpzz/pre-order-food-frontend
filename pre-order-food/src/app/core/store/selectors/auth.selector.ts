import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getAuthState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => {
    return state.auth;
  }
);

export const getUserEntities = createSelector(
  getAuthState,
  fromAuth.getAuthUser
);
