import { AuthActionsTypes } from './auth.actions';
import { AuthState } from './auth.models';
import { AppState } from 'redux/app-state';

const initialState: AuthState = {
  user: {},
  isLoading: false,
  isLogged: false,
  error: null,
};

export default (state = initialState, action): AuthState => {
  switch (action.type) {
    case AuthActionsTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        error: null,
      };
    case AuthActionsTypes.LOAD_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case AuthActionsTypes.LOGIN_FAILURE:
      return {
        user: {},
        isLoading: false,
        isLogged: false,
        error: action.payload,
      };
    case AuthActionsTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActionsTypes.LOGOUT_SUCCESS:
      return {
        user: {},
        isLoading: false,
        isLogged: false,
        error: null,
      };
    case AuthActionsTypes.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const selectCurrentUser = (state: AppState) => state.uiState.auth.user;
