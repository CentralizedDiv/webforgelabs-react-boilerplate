import { LoadCompaniesType } from 'entities/company/company.models';
import { UUID } from 'core/utils/basic.models';

export interface CompanyVM {
  id: UUID;
  name: string;
  initials: string;
  property_count: number;
  hectares: number;
  crops: any[];
}

export interface HallOfCompaniesProps {
  history: any;
  LoadCompanies: LoadCompaniesType;
  isLoadingCompanies: boolean;
  errorLoading: string | null;
  companies: CompanyVM[];
}

export interface CompaniesListProps {
  companies: CompanyVM[];
  isLoadingCompanies: boolean;
}

export interface CompanyCardProps {
  company: CompanyVM;
}
