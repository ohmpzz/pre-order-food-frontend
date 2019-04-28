import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUpload from '../reducers/upload.reducer';

export const getUploadState = createSelector(
  fromFeature.getCommuState,
  (state: fromFeature.CommuState) => {
    return state.upload;
  }
);

export const getUploadEntities = createSelector(
  getUploadState,
  fromUpload.getUploadEntities
);

export const getUploadLoaded = createSelector(
  getUploadState,
  fromUpload.getUploadLoaded
);

export const getUploadLoading = createSelector(
  getUploadState,
  fromUpload.getUploadLoading
);
