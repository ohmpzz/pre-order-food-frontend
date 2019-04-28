import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromGroups from '../reducers/group.reducer';

import { Community } from '../../models/community.model';

export const getGroupsState = createSelector(
  fromFeature.getCommuState,
  (state: fromFeature.CommuState) => {
    return state.groups;
  }
);

export const getGroupsEntities = createSelector(
  getGroupsState,
  fromGroups.getGroupsEntities
);

export const getSelectedGroup = createSelector(
  getGroupsEntities,
  fromRoot.getRouterState,
  (entities, router): Community => {
    return router.state && entities[router.state.params.commuId];
  }
);

export const getMembersSelectedGroup = createSelector(
  getSelectedGroup,
  (group: Community) => {
    return group.members
      ? Object.keys(group.members).map(k => {
          return { id: k, name: group.members[k] };
        })
      : [];
  }
);

export const getAllGroups = createSelector(
  getGroupsEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getGroupsLoaded = createSelector(
  getGroupsState,
  fromGroups.getGroupsLoaded
);

export const getGroupsLoading = createSelector(
  getGroupsState,
  fromGroups.getGroupsLoading
);
