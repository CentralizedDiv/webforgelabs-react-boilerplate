import { CompanyActionsTypes } from './company.actions';
import { Company, CompanyState } from './company.models';
import { createEntityAdapter, EntityAdapter } from 'redux-ngrx-entity';

function selectCompanyUuid(company: Company): string {
  return company.id;
}

function sortByName(a: Company, b: Company): number {
  return a.name.localeCompare(b.name);
}

const entity: EntityAdapter<Company> = createEntityAdapter<Company>({
  selectId: selectCompanyUuid,
  sortComparer: sortByName,
});

export const initialState = entity.getInitialState<CompanyState>({
  ids: [],
  entities: {},
  isLoading: false,
  error: null,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CompanyActionsTypes.LOAD_COMPANIES:
      return {
        ...state,
        isLoading: true,
      };
    case CompanyActionsTypes.LOAD_COMPANIES_SUCCESS:
      return entity.addAll(action.payload, {
        ...state,
        isLoading: false,
        error: null,
      });
    case CompanyActionsTypes.LOAD_COMPANIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const { selectIds, selectEntities, selectAll, selectTotal } = entity.getSelectors();
export const selectCompanyIds = selectIds;
export const selectCompanyEntities = selectEntities;
export const selectAllCompanies = selectAll;
export const selectCompanyTotal = selectTotal;
