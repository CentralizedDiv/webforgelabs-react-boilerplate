import { createSelector } from 'reselect';
import { selectAllCompanies } from 'entities/company/company.reducer';
import { CompanyVM } from './sample-page.models';
import { getInitials } from 'core/utils/functions';
import { Company } from 'entities/company/company.models';

const formatCompanies = (companyEntities: Company[]): CompanyVM[] => {
  const companies: CompanyVM[] = companyEntities.map(company => {
    return {
      id: company.id,
      name: company.name,
      initials: getInitials(company.name),
      property_count: company.property_count,
      hectares: company.total_area,
      crops: company.crops.reduce<any[]>((highlanderCropArray, crop) => {
        if (highlanderCropArray.filter(c => c.name === crop.name).length === 0) {
          return [...highlanderCropArray, crop];
        }
        return highlanderCropArray;
      }, []),
    };
  });
  return companies;
};

export const selectFormattedCompanies = createSelector(
  selectAllCompanies,
  formatCompanies
);
