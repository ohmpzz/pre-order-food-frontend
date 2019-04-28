import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducers';

export interface CoreState {
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<CoreState> = {
  auth: fromAuth.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');
