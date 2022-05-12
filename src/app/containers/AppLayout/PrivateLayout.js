import React, { memo } from 'react';
import { privateRoutes } from './routes';
import PrivateRoute from './PrivateRoute';
import CommonLayout from './CommonLayout';
import { Redirect, Switch } from 'react-router-dom';

const PrivateLayout = memo(function PrivateLayout() {
  return (
    <Switch>
      {privateRoutes.map(item => (
        <PrivateRoute
          key={item.key}
          exact
          path={item.path}
          component={item.component}
          layout={CommonLayout}
          permissions={item.permissions}
        />
      ))}
      <Redirect to="/not-found" />
    </Switch>
  );
});

export default PrivateLayout;
