import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PublicRoute from './PublicRoute';

import PrivateLayout from './PrivateLayout';
import { publicRoutes } from './routes';
import CommonLayout from './CommonLayout';

export const AppLayout = () => {
  return (
    <Switch>
      {publicRoutes.map(item => (
        <PublicRoute
          key={item.key}
          exact
          path={item.path}
          component={item.component}
          layout={CommonLayout}
        />
      ))}
      <Route component={PrivateLayout} />
    </Switch>
  );
};

AppLayout.propTypes = {
  location: PropTypes.object,
};

export default memo(AppLayout);
