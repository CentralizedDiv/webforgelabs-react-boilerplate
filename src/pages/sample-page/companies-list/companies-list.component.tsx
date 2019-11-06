import React from 'react';
import { useTranslation } from 'react-i18next';

import { CompaniesListProps } from '../sample-page.models';
import CompanyCard from '../company-card/company-card.component';
import { Empty } from 'antd';

const CompaniesList: React.FC<CompaniesListProps> = props => {
  const { t } = useTranslation();

  return (
    <div className="st-list-of-companies">
      <span className="st-list-of-companies__title">
        <span>{t('pages.hall_of_companies.title')}</span>
      </span>
      <div>
        {props.companies.length === 0 && !props.isLoadingCompanies && <Empty description=" " />}
        {props.companies.map((company, index) => (
          <div key={index}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesList;
