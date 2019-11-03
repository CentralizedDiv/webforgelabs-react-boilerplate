import { Action, UUID } from 'core/utils/basic.models';
import { EntityState } from 'redux-ngrx-entity';

export type LoadCompaniesType = () => Action;
export type LoadCompaniesSuccessType = (companies: Company[]) => Action<Company[]>;

export interface Company {
  id: UUID;
  name: string;
  owner_id: UUID;
  total_area: number;
  property_count: number;
  crops: any[];
  seasons: any[];
}

export interface CompanyState extends EntityState<Company> {
  isLoading: boolean;
  error: string | null;
}
