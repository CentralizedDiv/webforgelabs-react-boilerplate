import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LogoutRequest } from 'core/services/auth/auth.actions';
import STLogoutButton from './components/logout-button/logout-button.component';
import './header.styles.less';
import { AppState } from 'redux/app-state';
import { selectCurrentUser } from 'core/services/auth/auth.reducer';

const STHeader = props => {
  return (
    <div className="st-header-container">
      <div className="st-header-buttons">
        <STLogoutButton logout={props.LogoutRequest} user={props.currentUser} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      LogoutRequest,
    },
    dispatch
  );

const mapStateToProps = (state: AppState) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(STHeader);
