import {
  setAuthenticatedRequest,
  setAuthenticated,
  logoutRequest,
  logout,
} from '../actions';
import {
  AUTHENTICATED_REQUEST,
  AUTHENTICATED,
  LOGOUT_REQUEST,
  LOGOUT,
} from '../constants';

describe('Authentication actions', () => {
  describe('setAuthenticatedRequest Action', () => {
    it('has a type of AUTHENTICATED_REQUEST', () => {
      const expected = {
        type: AUTHENTICATED_REQUEST,
      };
      expect(setAuthenticatedRequest()).toEqual(expected);
    });
  });

  describe('setAuthenticated Action', () => {
    it('has a type of AUTHENTICATED', () => {
      const expected = {
        type: AUTHENTICATED,
      };
      expect(setAuthenticated()).toEqual(expected);
    });
  });

  describe('logoutRequest Action', () => {
    it('has a type of LOGOUT_REQUEST', () => {
      const expected = {
        type: LOGOUT_REQUEST,
      };
      expect(logoutRequest()).toEqual(expected);
    });
  });

  describe('logout Action', () => {
    it('has a type of AUTHENTICATED', () => {
      const expected = {
        type: LOGOUT,
      };
      expect(logout()).toEqual(expected);
    });
  });
});
