import { Action } from 'core/utils/basic.models';
import { LoadCompaniesType, LoadCompaniesSuccessType } from './company.models';

export const CompanyActionsTypes = {
  LOAD_COMPANIES: '[Company] Load Companies',
  LOAD_COMPANIES_SUCCESS: '[Company] Load Companies Success',
  LOAD_COMPANIES_FAILURE: '[Company] Load Companies Failure',
};

export const LoadCompanies: LoadCompaniesType = () => {
  return {
    type: CompanyActionsTypes.LOAD_COMPANIES,
  };
};

export const LoadCompaniesSuccess: LoadCompaniesSuccessType = companyPage => {
  return {
    type: CompanyActionsTypes.LOAD_COMPANIES_SUCCESS,
    payload: companyPage,
  };
};

export const LoadCompaniesFailure = (error: string): Action<string> => {
  return {
    type: CompanyActionsTypes.LOAD_COMPANIES_FAILURE,
    payload: error,
  };
};
