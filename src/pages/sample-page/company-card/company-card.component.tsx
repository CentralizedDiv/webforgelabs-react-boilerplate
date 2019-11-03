import React from 'react';
import { Tooltip } from 'antd';
import { CompanyCardProps } from '../sample-page.models';
import { useTranslation } from 'react-i18next';
import STAvatar from 'core/shared/avatar';
import { Link } from '@reach/router';

const CompanyName = ({ company, t }) => {
  return (
    <Tooltip title={t('pages.hall_of_companies.tooltips.avatar')}>
      <Link to="/sample-page-2">
        <STAvatar label={company.name} chevron={true}>
          {company.initials}
        </STAvatar>
      </Link>
    </Tooltip>
  );
};

const SeasonInfo = ({ company, t }) => (
  <div className="st-company-card__season-info">
    <div className="season-info__label">
      <span>{t('pages.hall_of_companies.card.season_label')}</span>
    </div>
    <div className="season-info__properties-info">
      <i className="sf sf-property" />
      <span>
        {t('entities.property.keyWithCount_plural', {
          count: company.property_count,
        })}
      </span>
    </div>
    <div className="season-info__hectares-and-crops-info">
      <div>
        <i className="sf sf-area" />
        <span>
          {t('units.hectares', {
            hectares: company.hectares,
          })}
        </span>
      </div>
    </div>
  </div>
);

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const { t } = useTranslation();
  return (
    <div className="st-company-card">
      <CompanyName company={company} t={t} />
      <SeasonInfo company={company} t={t} />
    </div>
  );
};

export default CompanyCard;
