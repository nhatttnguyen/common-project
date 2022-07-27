import { merge } from 'lodash/fp';
import baseConfig from './base';
const config = {
  appEnv: 'local', // feel free to remove the appEnv property here
  webApiUrl: 'https://uluru-pr-api.azure-api.net/transcription/v3',
  webCoreApiUrl: 'https://localhost:44363',
  Auth: {
    clientId: 'aCpBT5FhSkEihg2RA7Qolu30zQmhZ8JO',
    options: {},
  },
  AzureAdB2C: {
    msalConfig: {
      auth: {
        redirectUri: '/login-callback/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
      },
    },
  },
  regionalDomainTranscription: 'http://localhost:3000',
  domainCore: 'https://account-pr3-nv.qsrulurudev.com',
  domainCustomerPortal: 'https://account-qa-nv.qsrulurudev.com/',
  domainSharedCookie: null,
  apiSubscriptionKey: '1ff9f2de6f1a43ec8ae24c930869a4a4',
  SignalRDomain: 'https://uluru-pr-api.azure-api.net/v3',
};
export default Object.freeze(merge(baseConfig, config));
