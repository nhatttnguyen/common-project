import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'app/containers/Authentication/selectors';
import { useAuthentication } from 'hooks/useAuthentication';
import { useInjectSaga } from 'utils/redux-injectors';
import authenticationSaga from 'app/containers/Authentication/saga';
import { sliceKey } from 'app/containers/Authentication/slice';

export const PrivateRoute = ({
  component,
  layout: Layout,
  permissions: requiredPermissions,
  ...rest
}) => {
  useInjectSaga({ key: sliceKey, saga: authenticationSaga });

  useAuthentication();
  const isAuthenticated = useSelector(selectAuthenticated);

  const renderFn = Component => props => {
    if (!!Component && isAuthenticated) {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }
  };
  return <Route {...rest} render={renderFn(component)} />;
};

export default memo(PrivateRoute);
