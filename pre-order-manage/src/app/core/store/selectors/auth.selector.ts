import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducers';

import { User } from '../../models/user.model';

export const getAuthState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => {
    return state.auth;
  }
);

export const getUserEntitiy = createSelector(
  getAuthState,
  fromAuth.getUserEntity
);

export const getUserLogin = createSelector(
  getAuthState,
  fromAuth.getUserLogin
);
