import { RouterState } from 'connected-react-router';
import { GlobalUiState } from 'core/core.models';
import { AuthState } from 'core/services/auth/auth.models';
import { CompanyState } from 'entities/company/company.models';

export interface AppState {
  readonly router: RouterState;
  readonly entities: EntitiesState;
  readonly uiState: UiState;
}

export interface UiState {
  readonly auth: AuthState;
  readonly global: GlobalUiState;
}

export interface EntitiesState {
  readonly company: CompanyState;
}
