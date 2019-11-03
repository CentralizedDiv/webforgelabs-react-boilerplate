import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginRequest } from 'core/services/auth/auth.actions';

import LoginBackground from './login-background/login-background.component';
import LoginForm from './login-form/login-form.component';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';
import './login.styles.less';
import { AppVersion } from 'core/shared/version/version.component';
import { getAccessToken } from 'routes/auth.router';
import { AuthState } from '../../core/services/auth/auth.models';
import { RouteComponentProps } from 'react-router';

const showLoginError = t => {
  notification.error({
    message: t('alert.login.bad_credentials.title'),
    description: t('alert.login.bad_credentials.description'),
  });
};

export interface ILoginProps extends AuthState, RouteComponentProps {
  // Redux actions
  readonly LoginRequest: any;
}

export const Login: React.FC<ILoginProps> = props => {
  const { t } = useTranslation();

  useEffect(() => {
    if (props.error) showLoginError(t);
  }, [props.error, t]);

  // If successful login
  if (localStorage.getItem('remember') === 'true') {
    if (getAccessToken()) {
      return <Redirect to={'/sample-page'} />;
    }
  } else if (sessionStorage.getItem('access_token')) {
    return <Redirect to={'/sample-page'} />;
  }

  return (
    <div className="st-login-page">
      <LoginForm LoginRequest={props.LoginRequest} isLoading={props.isLoading} error={props.error} />
      <LoginBackground />
      <AppVersion />
    </div>
  );
};

const mapStateToProps = state => state.uiState.auth;

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      LoginRequest,
    },
    dispatch
  );

// Connects the entry-component and makes it the default export.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
