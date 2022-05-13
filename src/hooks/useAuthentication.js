import { useMsal } from '@azure/msal-react';
import { useSelector } from 'react-redux';

import { actions } from 'app/containers/Authentication/slice';
import useActions from 'hooks/useActions';

import authInfoUtils from 'utils/authInfoUtils';
import config from 'config/appConfig';

import { selectAuthenticated } from 'app/containers/Authentication/selectors';

export const useAuthentication = () => {
  const { instance } = useMsal();
  const isAuthenticated = useSelector(selectAuthenticated);

  const { setAuthenticated } = useActions(
    {
      setAuthenticated: actions.setAuthenticated,
    },
    [actions],
  );

  const accessToken = authInfoUtils.getAccessToken();
  if (accessToken) {
    setAuthenticated();
  } else if (!isAuthenticated) {
    instance.loginRedirect(config.AzureAdB2C.loginRequest);
  }
};
