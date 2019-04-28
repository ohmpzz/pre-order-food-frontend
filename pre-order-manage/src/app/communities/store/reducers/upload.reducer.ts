import * as fromUploads from '../actions/upload.actions';

export interface State {
  entities: { [id: number]: string };
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromUploads.UploadActions
): State {
  switch (action.type) {
    case fromUploads.UploadActionTypes.UploadCover: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromUploads.UploadActionTypes.UploadCoverFail: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromUploads.UploadActionTypes.UploadCoverSuccess: {
      const { url } = action.payload;
      const entities = { url };
      return {
        ...state,
        entities,
        loaded: true,
        loading: false,
      };
    }

    default:
      return state;
  }
}

export const getUploadEntities = (state: State) => state.entities;
export const getUploadLoaded = (state: State) => state.loaded;
export const getUploadLoading = (state: State) => state.loading;
