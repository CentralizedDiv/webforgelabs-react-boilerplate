import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { connectRouter } from 'connected-react-router';
// Auth
import auth from 'core/services/auth/auth.reducer';
import {
  handleCurrentUserFailure,
  handleLoadCurrentUser,
  handleLoginRequest,
  handleLoginSuccess,
  handleLogoutRequest,
} from 'core/services/auth/auth.epics';
// Company
import company from 'entities/company/company.reducer';
import { handleLoadCompanies } from 'entities/company/company.epics';
// Global
import global from 'core/core.reducer';
import { AppState, EntitiesState, UiState } from './app-state';

export const rootEpic = combineEpics(
  handleLoginRequest,
  handleLogoutRequest,
  handleCurrentUserFailure,
  handleLoginSuccess,
  handleLoadCurrentUser,
  handleLoadCompanies
);

export const rootReducer = (history: any) =>
  combineReducers<AppState>({
    router: connectRouter(history),
    uiState: combineReducers<UiState>({
      auth,
      global,
    }),
    entities: combineReducers<EntitiesState>({
      company,
    }),
  });
