import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromGroup from './groups.reducer';
import * as fromLastPreorder from './last-preorder.reducer';
import * as fromOwnCommuPreorder from './own-commu-preoder.reducer';

export interface LandingPageState {
  group: fromGroup.GroupState;
  lastPreorder: fromLastPreorder.LastPreorderState;
  ownCommuPreorder: fromOwnCommuPreorder.OwnCommuPreorder;
}

export const reducer: ActionReducerMap<LandingPageState> = {
  group: fromGroup.reducer,
  lastPreorder: fromLastPreorder.reducer,
  ownCommuPreorder: fromOwnCommuPreorder.reducer,
};

export const getLandingPageState = createFeatureSelector<LandingPageState>(
  'landingPage'
);
