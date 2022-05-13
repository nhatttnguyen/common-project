/* eslint-disable import/extensions */
import CryptoJS from 'crypto-js';
import WEBCONFIG from 'WEBCONFIG';
import configLocal from './local';
const bytes = CryptoJS.AES.decrypt(WEBCONFIG, 'Xu71dQGTVu');
const originalText = bytes.toString(CryptoJS.enc.Utf8);
const finalConfig =
  process.env.NODE_ENV === 'production'
    ? JSON.parse(originalText)
    : configLocal;
export default Object.freeze(finalConfig);
