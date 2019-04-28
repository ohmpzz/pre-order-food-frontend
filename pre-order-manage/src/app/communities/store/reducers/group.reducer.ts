import * as fromGroups from '../actions/group.actions';
import { Community } from '../../models/community.model';

export interface State {
  entities: { [id: number]: Community };
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  entities: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromGroups.GroupActions
): State {
  switch (action.type) {
    case fromGroups.GroupActionTypes.LoadGroups: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromGroups.GroupActionTypes.LoadGroupsSuccess: {
      const groups = action.payload;
      const entities = groups.reduce(
        (entities: { [id: number]: Community }, group: Community) => {
          return { ...entities, [group._id]: group };
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

    case fromGroups.GroupActionTypes.LoadGroupsFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
    case fromGroups.GroupActionTypes.addMemberSuccess:
    case fromGroups.GroupActionTypes.RemoveMemberSuccess:
    case fromGroups.GroupActionTypes.UpdateGroupSuccess:
    case fromGroups.GroupActionTypes.CreateGroupSuccess: {
      const { __v, ...group } = action.payload;
      const entities = {
        ...state.entities,
        [group._id]: group,
      };

      return {
        ...state,
        entities,
      };
    }

    case fromGroups.GroupActionTypes.RemoveGroupSuccess: {
      const group = action.payload;
      const { [group._id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
      };
    }

    default:
      return state;
  }
}

export const getGroupsEntities = (state: State) => state.entities;
export const getGroupsLoaded = (state: State) => state.loaded;
export const getGroupsLoading = (state: State) => state.loading;
