import { ofType } from 'redux-observable';
import { catchError, exhaustMap, flatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  AuthActionsTypes,
  LoadCurrentUser,
  LoadCurrentUserFailure,
  LoadCurrentUserSuccess,
  LoginFailure,
  LoginSuccess,
  LogoutFailure,
  LogoutRequest,
  LogoutSuccess,
} from './auth.actions';
import { concat, of } from 'rxjs';
import { LoginError, UserCredentials } from './auth.models';
import { auth, getCurrentUser } from './auth.service';
import { Action } from 'core/utils/basic.models';
import { LoadCompanies } from 'entities/company/company.actions';
import Cookies from 'js-cookie';
import { setCookie } from 'core/utils/functions';

export const handleLoginRequest = action$ =>
  action$.pipe(
    ofType(AuthActionsTypes.LOGIN_REQUEST),
    map((action: Action<UserCredentials>) => action.payload),
    map((userCredentials: UserCredentials) => {
      const token = {
        access_token: '123',
        refresh_token: '123',
        expires_in: 0,
        refresh_expires_in: 0,
      };
      localStorage.setItem('access_token', token.access_token);
      localStorage.setItem('refresh_token', token.refresh_token);
      sessionStorage.setItem('access_token', token.access_token);
      sessionStorage.setItem('refresh_token', token.refresh_token);
      setCookie('token', token);

      return LoginSuccess(token);
      // return auth(userCredentials).pipe(
      //   map(response => {
      //     const token = response.data;
      //     if (localStorage.getItem('remember') === 'true') {
      //       localStorage.setItem('access_token', token.access_token);
      //       localStorage.setItem('refresh_token', token.refresh_token);
      //       setCookie('token', token);
      //     } else {
      //       sessionStorage.setItem('access_token', token.access_token);
      //       sessionStorage.setItem('refresh_token', token.refresh_token);
      //     }
      //     return LoginSuccess(token);
      //   }),
      //   catchError((error: LoginError) => of(LoginFailure(error)))
      // );
    })
  );

export const handleLogoutRequest = action$ =>
  action$.pipe(
    ofType(AuthActionsTypes.LOGOUT_REQUEST),
    switchMap(async () => {
      Cookies.remove('token', {
        domain: window.location.hostname === 'localhost' ? 'localhost' : '.domain',
        path: '/',
      });
      if (localStorage.getItem('access_token')) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      } else if (sessionStorage.getItem('access_token')) {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
      }
      setTimeout(() => {
        window.location.reload();
      }, 50);
      return LogoutSuccess();
    }),
    catchError((error: LoginError) => of(LogoutFailure(error)))
  );

export const handleCurrentUserFailure = action$ =>
  action$.pipe(
    ofType(AuthActionsTypes.LOAD_CURRENT_USER_FAILURE),
    map(() => LogoutRequest())
  );

export const handleLoginSuccess = action$ =>
  action$.pipe(
    ofType(AuthActionsTypes.LOGIN_SUCCESS),
    mergeMap(() => concat([LoadCurrentUser()]))
  );

export const handleLoadCurrentUser = action$ =>
  action$.pipe(
    ofType(AuthActionsTypes.LOAD_CURRENT_USER),
    mergeMap(() =>
      getCurrentUser().pipe(
        map(response => response.data),
        flatMap(user => of(LoadCurrentUserSuccess(user)))
      )
    ),
    catchError(error => of(LoadCurrentUserFailure(error)))
  );
