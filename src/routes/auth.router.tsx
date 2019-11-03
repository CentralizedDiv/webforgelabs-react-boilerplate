import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/config';

import App from '../app';
import Login from 'pages/login/login.container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginSuccess } from 'core/services/auth/auth.actions';
import Cookies from 'js-cookie';

export const getAccessToken = () => {
  let token: string | null | undefined = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
  if (!token) {
    token = Cookies.get('striderToken');
    if (token) {
      const tokens = JSON.parse(decodeURIComponent(token));
      token = tokens.access_token;
      if (localStorage.getItem('remember') === 'true') {
        localStorage.setItem('access_token', tokens.access_token);
        localStorage.setItem('refresh_token', tokens.refresh_token);
      } else {
        sessionStorage.setItem('access_token', tokens.access_token);
        sessionStorage.setItem('refresh_token', tokens.refresh_token);
      }
    }
  }
  return token;
};
const isAuthenticated = () => !!getAccessToken();

const renderRedirect = () => <Redirect to="/sample-page" />;

// Redirect all routes to '/login' when user isn't authenticated
// tslint:disable-next-line
const ProtectedRoute = ({ component: Component, isLogged, ...props }) => {
  const canRedirect = () => {
    if (isLogged) {
      return true;
    } else {
      if (isAuthenticated()) {
        props.LoginSuccess(getAccessToken());
        return true;
      }
      return false;
    }
  };

  return (
    <Route
      {...props}
      // tslint:disable-next-line
      render={(renderProps: any) =>
        canRedirect() ? (
          <Component {...renderProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: renderProps.location },
            }}
          />
        )
      }
    />
  );
};

/**
 * We have three main routes:
 * 1: '/login', for unauthenticated users
 * 2: exact '/', that is redirected to '/sample-page'
 * 3: '/', that match all routes, rendering the App
 */
const Router = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/">
        <Route render={renderRedirect} />
      </Route>
      <ProtectedRouteConnected path="/" component={App} />
    </Switch>
  </ConnectedRouter>
);
export default Router;

const mapStateToProps = state => ({
  isLogged: state.uiState.auth.isLogged,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      LoginSuccess,
    },
    dispatch
  );

const ProtectedRouteConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRoute);
