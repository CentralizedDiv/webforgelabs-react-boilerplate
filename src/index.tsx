import { setConfig } from 'react-hot-loader';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/config';
import AuthRouter from './routes/auth.router';

import 'config/numeral';
import 'config/moment';
import 'config/i18n';
import 'main.less';

import { ErrorBoundary } from 'pages/error-boundary/error-boundary.component';

setConfig({
  reloadHooks: false,
});

const store = configureStore();

ReactDOM.render(
  <Suspense fallback={'Loading...'}>
    <Provider store={store}>
      <ErrorBoundary>
        <AuthRouter />
      </ErrorBoundary>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
