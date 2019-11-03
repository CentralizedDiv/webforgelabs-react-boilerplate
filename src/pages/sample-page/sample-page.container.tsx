import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CompaniesList from './companies-list/companies-list.component';
import './sample-page.styles.less';
import { LoadCompanies } from 'entities/company/company.actions';
import { HallOfCompaniesProps } from './sample-page.models';
import { AppState } from 'redux/app-state';
import { selectFormattedCompanies } from './sample-page.selectors';
import HallOfCompaniesSkeleton from './skeleton/sample-page.skeleton';

const HallOfCompanies: React.FC<HallOfCompaniesProps> = props => {
  return (
    <div className="st-sample-page">
      <CompaniesList companies={props.companies} isLoadingCompanies={props.isLoadingCompanies} />
      <HallOfCompaniesSkeleton loading={props.isLoadingCompanies} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoadingCompanies: state.entities.company.isLoading,
  errorLoading: state.entities.company.error,
  companies: selectFormattedCompanies(state.entities.company),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      LoadCompanies,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HallOfCompanies);
