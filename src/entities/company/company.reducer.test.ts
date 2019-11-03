import companyReducer, { initialState } from './company.reducer';
import { LoadCompanies, LoadCompaniesFailure, LoadCompaniesSuccess } from './company.actions';
import { Company } from './company.models';

describe('Company Reducer', () => {
  it('should set loading true to company state', () => {
    const expectedResult = { ...initialState, isLoading: true };
    expect(companyReducer(initialState, LoadCompanies())).toEqual(expectedResult);
  });

  it('should add a company to state', () => {
    const company: Company = {
      seasons: [],
      crops: [],
      id: '123',
      name: '',
      owner_id: 'uuid',
      property_count: 0,
      total_area: 0,
    };
    const expectedResult = {
      ...initialState,
      entities: { [company.id]: company },
      ids: [company.id],
    };
    expect(companyReducer(initialState, LoadCompaniesSuccess([company]))).toEqual(expectedResult);
  });

  it('should return a error response', () => {
    const error = 'Error found';
    const expectedResult = { ...initialState, error };
    expect(companyReducer(initialState, LoadCompaniesFailure(error))).toEqual(expectedResult);
  });
});
