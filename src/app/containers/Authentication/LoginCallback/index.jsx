// @flow
import React, { memo, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';

import { InteractionRequiredAuthError } from '@azure/msal-browser';
import moment from 'moment';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import config from 'config/appConfig';
import { getHashStringParameter } from 'utils/string';
import Spinner from 'app/components/Spinner';
import AuthInfo from 'models/AuthInfo';
import authInfoUtils from 'utils/authInfoUtils';
import { useInjectSaga } from 'utils/redux-injectors';
import { ACCESS_DENIED } from 'utils/constants';
import { selectAuthenticated } from 'app/containers/Authentication/selectors';
import useActions from 'hooks/useActions';

import saga from '../saga';
import { SpinnerWrapper } from './styles';
import { actions, sliceKey } from '../slice';

export const LoginCallback = () => {
  const { instance, accounts, inProgress } = useMsal();

  useInjectSaga({ key: sliceKey, saga });
  const history = useHistory();
  const location = useLocation();
  const isAuthenticated = useSelector(selectAuthenticated);
  const { setAuthenticatedRequest } = useActions(
    {
      setAuthenticatedRequest: actions.setAuthenticatedRequest,
    },
    [actions],
  );

  useEffect(() => {
    const error = getHashStringParameter('error', location);
    if (!isEmpty(error) && error === ACCESS_DENIED) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      !isAuthenticated &&
      get('length', accounts) > 0 &&
      inProgress === 'none'
    ) {
      const account = accounts[0] || {};
      instance
        .acquireTokenSilent({
          scopes: config.AzureAdB2C.loginRequest.scopes,
          account,
        })
        .then(response => {
          authInfoUtils.storeMSAzureAdAccount(account);
          const accessToken = get('accessToken', response);
          const now = moment();
          const expiredOnMoment = moment(response.expiresOn);
          const expiresIn = expiredOnMoment.diff(now, 'seconds');
          if (accessToken) {
            const authInfo = new AuthInfo({
              accessToken,
              expiresIn,
              issuedDate: moment(),
            });
            setAuthenticatedRequest(authInfo);
          }
        })
        .catch(error => {
          // in case if silent token acquisition fails, fallback to an interactive method
          if (error instanceof InteractionRequiredAuthError) {
            if (account && inProgress === 'none') {
              instance.acquireTokenRedirect({
                scopes: config.AzureAdB2C.loginRequest.scopes,
                loginHint: account.username,
              });
            }
          }
        });
    }
  }, [
    accounts,
    inProgress,
    instance,
    isAuthenticated,
    setAuthenticatedRequest,
  ]);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [history, isAuthenticated]);

  return (
    <SpinnerWrapper>
      <Spinner width="50px" borderWidth="2px" />
    </SpinnerWrapper>
  );
};

export default memo(LoginCallback);
