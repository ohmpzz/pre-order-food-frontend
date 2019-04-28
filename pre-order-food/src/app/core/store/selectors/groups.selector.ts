import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromGroups from '../reducers/groups.reducer';

import { Group } from '../../models/group.model';

export const getCommuState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => {
    return state.groups;
  }
);

export const getGroupsEntities = createSelector(
  getCommuState,
  fromGroups.getGroupsEntities
);

export const getSelectedGroup = createSelector(
  getGroupsEntities,
  fromRoot.getRouterState,
  (entities, router): Group => {
    return router.state && entities[router.state.params.groupId];
  }
);

export const getAllGroups = createSelector(
  getGroupsEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getGroupsLoaded = createSelector(
  getCommuState,
  fromGroups.getGroupsLoaded
);

export const getGroupsLoading = createSelector(
  getCommuState,
  fromGroups.getGroupsLoading
);

export const getGroupsLoadedById = createSelector(
  getCommuState,
  fromGroups.getGroupsLoadedById
);

export const getGroupsLoadingById = createSelector(
  getCommuState,
  fromGroups.getGroupsLoadingById
);
