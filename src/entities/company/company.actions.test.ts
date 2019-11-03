import { CompanyActionsTypes, LoadCompanies, LoadCompaniesFailure, LoadCompaniesSuccess } from './company.actions';
import { Company } from './company.models';

describe('Company Actions', () => {
  it('should create the action LOAD_COMPANIES', () => {
    const expectedResult = { type: CompanyActionsTypes.LOAD_COMPANIES };
    expect(LoadCompanies()).toEqual(expectedResult);
  });

  it('should create the action LOAD_COMPANIES_SUCCESS', () => {
    const company: Company = {
      seasons: [],
      crops: [],
      id: '123',
      name: '',
      owner_id: 'uuid',
      property_count: 0,
      total_area: 0,
    };
    const expectedResult = { type: CompanyActionsTypes.LOAD_COMPANIES_SUCCESS, payload: [company] };
    expect(LoadCompaniesSuccess([company])).toEqual(expectedResult);
  });

  it('should create the action LOAD_COMPANIES_FAILURE', () => {
    const error = 'Error found';
    const expectedResult = { type: CompanyActionsTypes.LOAD_COMPANIES_FAILURE, payload: error };
    expect(LoadCompaniesFailure(error)).toEqual(expectedResult);
  });
});
