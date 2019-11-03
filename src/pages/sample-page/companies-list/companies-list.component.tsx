import React from 'react';
import { useTranslation } from 'react-i18next';
import { fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import { CompaniesListProps } from '../sample-page.models';
import CompanyCard from '../company-card/company-card.component';
import { Empty } from 'antd';

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`;

const FadeInUp = styled.div`
  flex: 1 1 33%;
  min-width: 300px;
  max-width: 400px;
  animation: ${props => Math.floor(props.idx / 3) / 3 + 0.5}s ${keyframes`${fadeInUp}`};

  padding: 0 8px;
`;

const CompaniesList: React.FC<CompaniesListProps> = props => {
  const { t } = useTranslation();

  return (
    <div className="st-list-of-companies">
      <span className="st-list-of-companies__title">
        <span>{t('pages.hall_of_companies.title')}</span>
      </span>
      <StyledGrid>
        {props.companies.length === 0 && !props.isLoadingCompanies && <Empty description=" " />}
        {props.companies.map((company, index) => (
          <FadeInUp key={index} idx={index}>
            <CompanyCard company={company} />
          </FadeInUp>
        ))}
      </StyledGrid>
    </div>
  );
};

export default CompaniesList;
