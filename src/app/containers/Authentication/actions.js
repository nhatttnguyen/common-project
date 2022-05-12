import AuthInfo from 'models/AuthInfo';
/*
 *
 * Authentication actions
 *
 */

import {
  AUTHENTICATED_REQUEST,
  AUTHENTICATED,
  LOGOUT_REQUEST,
  LOGOUT,
} from './constants';

/**
 * request to set user is authenticated.
 * @param {AuthInfo} authInfo
 */
export const setAuthenticatedRequest = (authInfo: AuthInfo) => {
  console.log('setAuthenticatedRequest', authInfo);
  return {
    type: AUTHENTICATED_REQUEST,
    authInfo,
  };
};

/**
 * set user is authenticated
 */
export const setAuthenticated = () => ({
  type: AUTHENTICATED,
});

/**
 * User logout.
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Request to logout.
 */
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});
