import axios from 'axios-observable';
import { AxiosObservable } from 'axios-observable/dist/axios-observable.interface';
import { Company } from './company.models';

// const baseUrl = process.env.REACT_APP_API_URL;

export const getCompanyPage = (): AxiosObservable<Company[]> => {
  return axios.get<Company[]>(`/__mocks__/company.pages.json`);
};
