import * as fromGroup from '../actions/group.action';
import { Group } from '@app/features/groups/models/group.model';

export interface GroupState {
  entities: { [id: number]: Group };
  loaded: boolean;
  loading: boolean;
}

export const initialState: GroupState = {
  entities: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromGroup.GroupAction
): GroupState {
  switch (action.type) {
    case fromGroup.GroupActionTypes.LoadGroup: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromGroup.GroupActionTypes.LoadGroupFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
    case fromGroup.GroupActionTypes.LoadGroupSuccess: {
      const groups = action.payload;

      const entities = groups.reduce(
        (entities: { [id: number]: Group }, group: Group) => {
          return {
            ...entities,
            [group._id]: group,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }
  }
  return state;
}

export const getGroupEntities = (state: GroupState) => state.entities;
export const getGroupLoaded = (state: GroupState) => state.loaded;
export const getGroupLoading = (state: GroupState) => state.loading;
