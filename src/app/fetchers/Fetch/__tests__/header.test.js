import config from 'config/appConfig';
import {
  buildAuthenticationHeader,
  buildAccountIdHeader,
  buildApiManagementKeyHeader,
  buildDefaultContentTypeHeader,
} from '../header';

describe('Fetch header', () => {
  it('buildAuthenticationHeader', () => {
    const accessToken = 'token';
    const headers = buildAuthenticationHeader(accessToken);
    expect(headers).toEqual({ Authorization: `Bearer ${accessToken}` });
  });

  it('buildAccountIdHeader', () => {
    const accountId = 123;
    const headers = buildAccountIdHeader(accountId);
    expect(headers).toEqual({ CurrentAccountId: accountId });
  });

  it('buildApiManagementKeyHeader', () => {
    const expectedResult = {
      'Ocp-Apim-Subscription-Key': config.apiSubscriptionKey,
    };
    expect(buildApiManagementKeyHeader()).toEqual(expectedResult);
  });

  it('buildDefaultContentTypeHeader', () => {
    const expectedResult = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    expect(buildDefaultContentTypeHeader()).toEqual(expectedResult);
  });
});
