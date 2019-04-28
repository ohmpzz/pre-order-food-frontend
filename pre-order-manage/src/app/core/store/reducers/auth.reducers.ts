import * as fromAuth from '../actions/auth.actions';
import { User } from '../../models/user.model';

export interface AuthState {
  user: User | null;
  login: boolean;
}

export const initialState: AuthState = {
  user: {},
  login: false,
};

export function reducer(
  state = initialState,
  action: fromAuth.AuthActions
): AuthState {
  switch (action.type) {
    case fromAuth.AuthActionTypes.LoadAuths: {
      return { ...state };
    }

    case fromAuth.AuthActionTypes.LoadAuthsSuccess: {
      const user = action.payload;
      return { ...state, user, login: true };
    }

    case fromAuth.AuthActionTypes.LogoutSuccess: {
      return { ...state, login: false };
    }
  }

  return state;
}

export const getUserEntity = (state: AuthState) => state.user;
export const getUserLogin = (state: AuthState) => state.login;
