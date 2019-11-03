import { LoginError, Token, User, UserCredentials } from './auth.models';

export const AuthActionsTypes = {
  LOGIN_REQUEST: '[Auth Service] Request Login',
  LOGIN_SUCCESS: '[Auth Service] Login Success',
  LOGIN_FAILURE: '[Auth Service] Login Failure',

  LOGOUT_REQUEST: '[Auth Service] Logout Request',
  LOGOUT_SUCCESS: '[Auth Service] Logout Success',
  LOGOUT_FAILURE: '[Auth Service] Logout Failure',

  LOAD_CURRENT_USER: '[Auth Service] Load Current User',
  LOAD_CURRENT_USER_SUCCESS: '[Auth Service] Load Current User Success',
  LOAD_CURRENT_USER_FAILURE: '[Auth Service] Load Current User Failure',
};

export const LoginRequest = (userCredentials: UserCredentials): { readonly type; readonly payload } => {
  return {
    type: AuthActionsTypes.LOGIN_REQUEST,
    payload: userCredentials,
  };
};

export const LoginSuccess = (token: Token) => {
  return {
    type: AuthActionsTypes.LOGIN_SUCCESS,
    payload: token,
  };
};

export const LoginFailure = (error: LoginError) => {
  return {
    type: AuthActionsTypes.LOGIN_FAILURE,
    payload: error,
  };
};

export const LogoutRequest = () => {
  return {
    type: AuthActionsTypes.LOGOUT_REQUEST,
  };
};

export const LogoutSuccess = () => {
  return {
    type: AuthActionsTypes.LOGOUT_SUCCESS,
  };
};

export const LogoutFailure = (error: LoginError) => {
  return {
    type: AuthActionsTypes.LOGOUT_FAILURE,
    payload: error,
  };
};

export const LoadCurrentUser = () => {
  return {
    type: AuthActionsTypes.LOAD_CURRENT_USER,
  };
};

export const LoadCurrentUserSuccess = (user: User) => {
  return {
    type: AuthActionsTypes.LOAD_CURRENT_USER_SUCCESS,
    payload: user,
  };
};

export const LoadCurrentUserFailure = error => {
  console.log(error);
  return {
    type: AuthActionsTypes.LOAD_CURRENT_USER_FAILURE,
    payload: error,
  };
};
