import axios from 'axios';
import { isEmpty } from 'lodash/fp';

import { convertToJson as convertToJsonFn } from './utils';
import authInfoUtils from 'utils/authInfoUtils';
import {
  buildAuthenticationHeader,
  buildAccountIdHeader,
  buildApiManagementKeyHeader,
  buildDefaultContentTypeHeader,
} from './header';

import { DEFAULT_PRODUCT_ID } from 'utils/constants';
import config from 'config/appConfig';

const apiBaseUrl = config.webCoreApiUrl;

export const convertToJson = convertToJsonFn;

export const defaultHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const createFormData = payload => new FormData(payload);

export const notApplyCacheHeader = {
  headers: {
    'Cache-Control': 'no-cache, no-store',
    pragma: 'no-cache',
  },
};

export const FormConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
};

export const buildHeaders = (configFetch = {}) => {
  let headers = {};
  if (!configFetch.removeDefaultHeader) {
    headers = Object.assign(headers, buildDefaultContentTypeHeader());
  }
  Object.assign(
    headers,
    buildAuthHeaders(configFetch),
    buildAccountHeaders(configFetch),
    configFetch.headers,
    buildApiManagementHeaders(configFetch),
    { CurrentProductId: DEFAULT_PRODUCT_ID },
  );
  return headers;
};

export const buildApiManagementHeaders = (configFetch = {}) => {
  if (configFetch.excludeApimHeader) return null;
  const headers = buildApiManagementKeyHeader();
  return headers;
};

export const buildAuthHeaders = (configFetch = {}) => {
  if (configFetch.excludeAuthHeader) return null;

  const accessToken = authInfoUtils.getAccessToken();
  const headers = buildAuthenticationHeader(accessToken);
  return headers;
};

export const buildAccountHeaders = (configFetch = {}) => {
  if (configFetch.excludeAccountHeader) return null;
  const currentAccountId = authInfoUtils.getCurrentAccountId();
  return buildAccountIdHeader(currentAccountId);
};

const getClient = (baseUrl = apiBaseUrl, customConfig = {}) => {
  let options = {
    baseUrl,
  };

  const client = axios.create(options);

  client.interceptors.request.use(
    async requestConfig => {
      let interceptedConfig = { ...requestConfig };

      interceptedConfig.headers = buildHeaders(customConfig);

      return interceptedConfig;
    },
    requestError => Promise.reject(requestError),
  );

  // ! Responses are wrapped with the following object format:
  // {
  //     status : http status code
  //     data : actual data
  //     meta : meta response
  //     message : error message ( only for error)
  // }

  client.interceptors.response.use(
    response => {
      const { status, data: rawData } = response;
      let data;

      if (isEmpty(rawData)) {
        data = {};
      } else {
        data = rawData;
      }

      return { status, data };
    },
    async error => {
      const { status, data: rawData } = error.response;

      let data;
      if (status === 401) {
        // todo Logout the user
      }

      if (isEmpty(rawData)) {
        data = {};
      } else {
        data = rawData;
      }

      return Promise.reject({ status, data, message: error.message });
    },
  );

  return client;
};

class FetchClient {
  client = {};
  constructor(baseUrl = apiBaseUrl, customConfig = {}) {
    this.client = getClient(baseUrl, customConfig);
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then(res => Promise.resolve(res))
      .catch(err => {
        console.log(`request failed for ${url}`);
        console.log(err);
        throw err;
      });
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, { data: conf })
      .then(response => Promise.resolve(response))
      .catch(error => {
        console.log(`request failed for ${url}`);
        console.log(error);
        throw error;
      });
  }

  post(url, data = {}, conf = {}) {
    return this.client
      .post(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => {
        console.log(`request failed for ${url}`);
        console.log(error);
        throw error;
      });
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => {
        console.log(`request failed for ${url}`);
        console.log(error);
        throw error;
      });
  }

  patch(url, data = {}, conf = {}) {
    return this.client
      .patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => {
        console.log(`request failed for ${url}`);
        Promise.reject(error);
      });
  }
}

const defaultClient = new FetchClient();

// ? Default imports an instantiated client.
export default defaultClient;

// ? Alternatively, construct it yourself if there's another url that you need to access.
// Example : const client = new ApiClient('baseUrl');
// ? If you want to different config for the client, you can pass it as the second parameter.
// E.g:  new CustomFetchClient(undefined, notApplyCacheHeader)

export { FetchClient };
