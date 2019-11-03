import axios from 'axios-observable';
import { Token, UserCredentials } from './auth.models';
import { AxiosObservable } from 'axios-observable/dist/axios-observable.interface';

const authUrl = process.env.REACT_APP_API_URL + '/oauth/token';
const authSecret = process.env.REACT_APP_AUTH_SECRET_ID;

export const auth = (userCredentials: UserCredentials): AxiosObservable<Token> => {
  return axios.post<Token>(
    `${authUrl}?grant_type=password&username=${encodeURIComponent(
      userCredentials.username
    )}&password=${encodeURIComponent(userCredentials.password)}`,
    null,
    {
      headers: {
        Authorization: `Basic ${authSecret}`,
      },
    }
  );
};

export const refreshToken = (rToken: string): AxiosObservable<Token> => {
  return axios.post<Token>(`${authUrl}?grant_type=password&refresh_token=${rToken}`, null, {
    headers: {
      Authorization: authSecret,
    },
  });
};

export const getCurrentUser = () => {
  return axios.get('/__mocks__/current-user.json');
};
