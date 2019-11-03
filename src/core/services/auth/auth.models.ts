import { UUID } from 'core/utils/basic.models';

export interface AuthState {
  readonly user: User | {};
  readonly isLoading: boolean;
  readonly isLogged: boolean;
  readonly error: string | null;
}

export interface UserCredentials {
  readonly username: string;
  readonly password: string;
  readonly remember: boolean;
}

export interface Token {
  readonly access_token: string;
  readonly expires_in: number;
  readonly refresh_expires_in: number;
  readonly refresh_token: string;
}

export interface User {
  readonly id: UUID;
  readonly name: string;
}

export type LoginError = string;
