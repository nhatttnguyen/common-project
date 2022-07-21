// @flow
import config from 'config/appConfig';
import FetchClient from './Fetch';
class AccountFetcher {
  ROOT_URL = config.webCoreApiUrl;

  fetchCurrentUserInfo = async () => {
    const url = `${this.ROOT_URL}/accounts/myprofile`;

    try {
      const { data } = await FetchClient.get(url);
      return { response: data };
    } catch (error) {
      throw error;
    }
  };

  fetchAccountList = async userId => {
    const url = `${this.ROOT_URL}/users/${userId}/accounts`;

    try {
      const { data } = await FetchClient.get(url);
      return { response: data.accounts };
    } catch (error) {
      throw error;
    }
  };

  fetchListKeys = async userId => {
    const url = `${this.ROOT_URL}/accounts/myprofile`;

    try {
      const { data } = await FetchClient.get(url);
      return { response: data };
    } catch (error) {
      throw error;
    }
  };
}
const singleton = new AccountFetcher();
export default singleton;
