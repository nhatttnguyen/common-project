import { isNil, get, isEmpty } from 'lodash/fp';
import moment from 'moment';

import config from 'config/appConfig';
import AuthInfo from 'models/AuthInfo';
import cookieUtils from 'utils/shim/cookieUtils';
import { InteractionRequiredAuthError } from '@azure/msal-browser';

import { CURRENT_ACCOUNT_KEY, COOKIE_EXPAND_UPLOAD } from './constants';

const AUTH_INFO = 'AuthenticationInfo';
const MS_AZURE_AD_ACCOUNT = 'MSAzureAccount';

const REFRESH_ACCESS_TOKEN_INTERVAL = 30 * 60 * 1000; // 30 minutes
let refreshAccessTokenTimer;

class AuthInfoUtils {
  /**
   * store AuthInfo to cookie.
   */
  storeAuthInfo(authInfo) {
    if (!isNil(authInfo)) {
      /**
       * Before write cookie
       * Remove all cookie have key AuthenticationInfo when have 2 differnce domain
       */
      this.removeAuthInfo(true);
      cookieUtils.set(
        AUTH_INFO,
        JSON.stringify(authInfo),
        config.domainSharedCookie,
      );
    }
  }

  storeMSAzureAdAccount(account) {
    if (!isNil(account)) {
      cookieUtils.set(MS_AZURE_AD_ACCOUNT, '', config.domainSharedCookie);
      cookieUtils.set(
        MS_AZURE_AD_ACCOUNT,
        JSON.stringify(account),
        config.domainSharedCookie,
      );
    }
  }

  /**
   * get authInfo from cookie.
   */
  /* eslint-disable no-underscore-dangle */
  _getAuthInfo() {
    try {
      const jsonData = JSON.parse(cookieUtils.get(AUTH_INFO));
      return !isEmpty(jsonData) ? new AuthInfo(jsonData) : null;
    } catch (err) {
      return null;
    }
  }

  /**
   * get authInfo from cookie and validation before returning object. if error -> user need to re-authenticate.
   */
  getAuthInfo() {
    try {
      const authInfo = this._getAuthInfo();
      if (!isNil(authInfo) && authInfo.isValid()) {
        return authInfo;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * get accessToken from authInfo in cookie
   */
  getAccessToken() {
    const authInfo = this.getAuthInfo();
    return get('accessToken')(authInfo);
  }

  /**
   * check if user is authenticated or not.
   */
  isAuthenticated() {
    const authInfo = this._getAuthInfo();
    return !isNil(authInfo) ? authInfo.isValid() : false;
  }

  /**
   * remove authInfo from cookie.
   */
  removeAuthInfo(isStoreAuth) {
    // Remove all cookie have key AuthenticationInfo when have 2 differnce domain
    cookieUtils.set(AUTH_INFO, '', config.domainSharedCookie);
    cookieUtils.remove(AUTH_INFO);
    cookieUtils.remove(AUTH_INFO, config.domainSharedCookie);

    if (!isStoreAuth) {
      cookieUtils.set(CURRENT_ACCOUNT_KEY, '', config.domainSharedCookie);
      cookieUtils.remove(CURRENT_ACCOUNT_KEY, config.domainSharedCookie);

      cookieUtils.set(COOKIE_EXPAND_UPLOAD, '', config.domainSharedCookie);
      cookieUtils.remove(COOKIE_EXPAND_UPLOAD, config.domainSharedCookie);

      cookieUtils.set(MS_AZURE_AD_ACCOUNT, '', config.domainSharedCookie);
      cookieUtils.remove(MS_AZURE_AD_ACCOUNT, config.domainSharedCookie);
      if (refreshAccessTokenTimer) {
        clearInterval(refreshAccessTokenTimer);
      }
    }
  }

  isNeedRefreshToken = () => {
    const authInfo = this._getAuthInfo();
    const remainTime = authInfo ? authInfo.remainTime() : 0;
    return remainTime < REFRESH_ACCESS_TOKEN_INTERVAL / 1000;
  };

  /**
   * refresh access token.
   */
  refreshAccessToken({ msalContext }) {
    const { instance, accounts } = msalContext;
    let currentAccount; // Azure AD account
    if (get('length', accounts) > 0) {
      currentAccount = accounts[0];
      this.storeMSAzureAdAccount(currentAccount);
    } else {
      currentAccount = JSON.parse(cookieUtils.get(MS_AZURE_AD_ACCOUNT));
    }

    if (!isNil(currentAccount)) {
      const silentRequest = {
        scopes: config.AzureAdB2C.loginRequest.scopes,
        account: currentAccount,
        forceRefresh: false,
      };

      const request = {
        scopes: config.AzureAdB2C.loginRequest.scopes,
        loginHint: currentAccount.username, // For v1 endpoints, use upn from idToken claims
      };

      const self = this;

      instance
        .acquireTokenSilent(silentRequest)
        .then(response => {
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
            self.storeAuthInfo(authInfo);
          } else {
            instance.loginRedirect(config.AzureAdB2C.loginRequest);
          }
        })
        .catch(error => {
          if (error instanceof InteractionRequiredAuthError) {
            // fallback to interaction when silent call fails
            instance.acquireTokenRedirect(request);
          }
        });
    } else {
      instance.loginRedirect(config.AzureAdB2C.loginRequest);
    }
  }

  getCurrentAccountID() {
    return Number(cookieUtils.get(CURRENT_ACCOUNT_KEY));
  }
  /**
   * Create interval for refesh token
   */
  createIntervalRefreshToken({ msalContext }) {
    /* istanbul ignore else */
    if (refreshAccessTokenTimer) {
      clearInterval(refreshAccessTokenTimer);
    }
    const self = this;
    window.addEventListener('online', () => {
      /* istanbul ignore else */
      if (this.isNeedRefreshToken()) {
        self.refreshAccessToken({ msalContext });
      }
    });
    /* istanbul ignore else */
    if (this.isNeedRefreshToken()) {
      self.refreshAccessToken({ msalContext });
    }
    refreshAccessTokenTimer = setInterval(
      () => self.refreshAccessToken({ msalContext }),
      REFRESH_ACCESS_TOKEN_INTERVAL,
    );
  }
}
const singleton = new AuthInfoUtils();
export default singleton;
