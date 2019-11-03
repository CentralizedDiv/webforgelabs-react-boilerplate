import { CompanyActionsTypes, LoadCompaniesFailure, LoadCompaniesSuccess } from './company.actions';
import { Action } from 'core/utils/basic.models';
import { ofType } from 'redux-observable';
import { catchError, concatMap, map } from 'rxjs/operators';
import { getCompanyPage } from './company.service';
import { of } from 'rxjs';
import { Company } from './company.models';

export const handleLoadCompanies = action$ =>
  action$.pipe(
    ofType(CompanyActionsTypes.LOAD_COMPANIES),
    map((action: Action<any>) => action.payload),
    concatMap(query =>
      getCompanyPage().pipe(
        map(response => response.data),
        map((companies: Company[]) => {
          return LoadCompaniesSuccess(companies);
        }),
        catchError((error: string) => of(LoadCompaniesFailure(error)))
      )
    )
  );
