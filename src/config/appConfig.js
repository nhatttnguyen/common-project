/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import CryptoJS from 'crypto-js';
import { isNil } from 'lodash/fp';
import WEBCONFIG from 'WEBCONFIG';
import configLocal from './local';

export const getConfiguration = () => {
  const scope = getGlobalScope();
  if (isNil(scope.appConfig)) {
    const config = readConfiguration();
    setConfiguration(config);
  }
  if (!isNil(scope.appConfig)) {
    const config = JSON.parse(scope.appConfig);
    return config;
  }
  return null;
};

export const readConfiguration = () => {
  if (isWorkerScope()) {
    return null;
  }
  const bytes = CryptoJS.AES.decrypt(WEBCONFIG, 'Xu71dQGTVu');
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  const finalConfig =
    process.env.NODE_ENV === 'production'
      ? JSON.parse(originalText)
      : configLocal;
  return finalConfig;
};

export const setConfiguration = config => {
  const scope = getGlobalScope();
  const finalConfig = config || readConfiguration();
  if (!isNil(finalConfig)) {
    scope.appConfig = JSON.stringify(finalConfig);
  }
};

export const getGlobalScope = () => {
  if (isWorkerScope()) {
    // eslint-disable-next-line no-restricted-globals
    return self;
  }
  return window;
};

// eslint-disable-next-line no-undef
export const isWorkerScope = () =>
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-restricted-globals
  typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;

export default getConfiguration();
