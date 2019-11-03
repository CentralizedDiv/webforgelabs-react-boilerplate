import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'config/routes';
import { Redirect } from 'react-router';

/**
 * Unmathced routes redirect to '/sample-page'
 */
const MainRouter = () => {
  const renderRedirect = () => <Redirect to="/sample-page" />;
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Switch>
        {routes.map((route, index) => (
          <Route exact={route.exact} key={index} path={route.path} component={route.component} />
        ))}
        <Route render={renderRedirect} />
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
