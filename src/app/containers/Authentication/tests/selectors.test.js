import {
  getAuthenticated,
  selectAuthenticationDomain,
  getAccountStateId,
} from '../selectors';

describe('selectAuthenticationDomain', () => {
  it('getAuthentication', () => {
    const authState = {
      what: 'I dont know',
    };
    const state = {
      authentication: authState,
    };
    const actual = selectAuthenticationDomain(state);
    expect(actual).toEqual(authState);
  });

  it('Is Authenticated', () => {
    const state = {
      authentication: {
        isAuthenticated: true,
      },
    };
    const func = getAuthenticated();
    const actual = func(state);
    expect(actual).toBe(true);
  });

  it('Is not Authenticated', () => {
    const state = {
      authentication: {
        isAuthenticated: false,
      },
    };
    const func = getAuthenticated();
    const actual = func(state);
    expect(actual).toBe(false);
  });

  it('getAccountStateId', () => {
    const loadAccountStateId = getAccountStateId();
    const state = {
      user: {
        currentAccount: {
          data: {
            accountStateId: 1,
          },
        },
      },
    };
    expect(loadAccountStateId(state)).toEqual(1);
  });
});
