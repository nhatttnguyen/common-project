import { createSelector } from 'reselect';
import { get } from 'lodash/fp';

/**
 * Direct selector to the authentication state domain
 */
const selectAuthenticationDomain = state => {
  return state.authentication;
};

/**
 * Select user from store
 */
const selectUser = state => state.user;

/**
 * Other specific selectors
 */

const getAuthenticated = () =>
  createSelector(
    selectAuthenticationDomain,
    authentication => authentication.isAuthenticated,
  );

const selectAuthenticated = createSelector(
  selectAuthenticationDomain,
  authentication => authentication.isAuthenticated,
);

const getAccountStateId = () =>
  createSelector(selectUser, user =>
    get('currentAccount.data.accountStateId', user),
  );

export {
  selectAuthenticationDomain,
  getAuthenticated,
  getAccountStateId,
  selectAuthenticated,
};
