import config from 'config/appConfig';

export const buildAuthenticationHeader = accessToken => {
  const headers = {};
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return headers;
};

export const buildAccountIdHeader = accountId => {
  const headers = {};
  if (accountId) {
    headers.CurrentAccountId = accountId;
  }

  return headers;
};

export const buildApiManagementKeyHeader = () => {
  //! todo const appConfig = getConfiguration();
  return {
    'Ocp-Apim-Subscription-Key': config.apiSubscriptionKey,
  };
};

export const buildDefaultContentTypeHeader = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});
