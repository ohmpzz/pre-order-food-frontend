import * as fromAuth from '../actions/auth.action';
import { AuthData } from '../../models/auth.model';

export interface AuthState {
  user: AuthData | null;
}

export const initialState: AuthState = {
  user: {},
};

export function reducer(
  state = initialState,
  action: fromAuth.AuthAction
): AuthState {
  switch (action.type) {
    case fromAuth.AuthActionTypes.UPDATE_USER: {
      return { ...state };
    }

    case fromAuth.AuthActionTypes.UPDATE_USER_SUCCESS: {
      const user = action.payload;

      return { ...state, user };
    }
  }

  return state;
}

export const getAuthUser = (state: AuthState) => state.user;
