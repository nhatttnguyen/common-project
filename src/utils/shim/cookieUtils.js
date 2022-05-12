import Cookies from 'js-cookie';
import { isSiteHttps } from 'utils';

const CookieUtils = {
  /**
   * Get cookie by key
   */
  get: key => Cookies.get(key),

  /**
   * Set cookie with default expires
   * @param {string} key
   * @param {string} value
   * @param {any} options
   */
  set(key, value, domain, options) {
    Cookies.set(key, value, {
      expires: 365,
      domain,
      ...options,
      secure: isSiteHttps(),
    });
  },

  /**
   * Remove cookie by key
   * @param {string} key
   * @param {string} path
   */
  remove(key, domain, path) {
    Cookies.remove(key, { path, domain });
  },

  /**
   * Clear all
   * @param {string} path
   */
  clear(domain, path) {
    const pairs = document.cookie.split(';');
    const keys = pairs.map(item => item.split('=')[0]);
    keys.forEach(key => {
      Cookies.remove(key, { path, domain });
    });
  },
};

export default CookieUtils;
