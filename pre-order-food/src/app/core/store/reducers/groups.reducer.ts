import * as fromGroups from '../actions/groups.action';
import { Group } from '../../models/group.model';

export interface GroupState {
  entities: { [id: number]: Group };
  loaded: boolean;
  loading: boolean;
  loadedById: boolean;
  loadingById: boolean;
}

export const initialState: GroupState = {
  entities: [],
  loaded: false,
  loading: false,
  loadedById: false,
  loadingById: false,
};

export function reducer(
  state = initialState,
  action: fromGroups.GroupsAction
): GroupState {
  switch (action.type) {
    case fromGroups.GroupsActionTypes.LoadGroupById: {
      return {
        ...state,
        loadingById: true,
      };
    }

    case fromGroups.GroupsActionTypes.LoadGroups: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromGroups.GroupsActionTypes.LoadGroupByIdFail: {
      return {
        ...state,
        loadedById: false,
        loadingById: false,
      };
    }

    case fromGroups.GroupsActionTypes.LoadGroupsFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromGroups.GroupsActionTypes.LoadOwnerGroupsSuccess:
    case fromGroups.GroupsActionTypes.LoadGroupsSuccess: {
      const groups = action.payload;

      const entities = groups.reduce(
        (entities: { [id: number]: Group }, group: Group) => {
          return {
            ...entities,
            [group._id]: group,
          };
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

    case fromGroups.GroupsActionTypes.LoadGroupByIdSuccess: {
      const group = action.payload;

      const entities = { ...state.entities, [group._id]: group };

      return {
        ...state,
        loadedById: true,
        loadingById: false,
        entities,
      };
    }
  }

  return state;
}

export const getGroupsEntities = (state: GroupState) => state.entities;
export const getGroupsLoaded = (state: GroupState) => state.loaded;
export const getGroupsLoading = (state: GroupState) => state.loading;
export const getGroupsLoadedById = (state: GroupState) => state.loadedById;
export const getGroupsLoadingById = (state: GroupState) => state.loadingById;
