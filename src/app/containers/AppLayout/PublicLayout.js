import React, { memo } from 'react';
import { publicRoutes } from './routes';
import PublicRoute from './PublicRoute';
import AuthLayout from './AuthLayout';

const PublicLayout = memo(function PublicLayout(props) {
  return (
    <>
      {publicRoutes.map(item => (
        <PublicRoute
          key={item.key}
          exact
          path={item.path}
          component={item.component}
          layout={AuthLayout}
        />
      ))}
    </>
  );
});

export default PublicLayout;
