/* eslint-disable no-console */
/* eslint-disable consistent-return */
import { LogLevel } from '@azure/msal-browser';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  AzureAdB2C: {
    msalConfig: {
      auth: {
        clientId: '34501fb8-d1e6-4973-aa5b-97b1a1946ca9', // This is the ONLY mandatory field that you need to supply.
        authority:
          'https://qsrulurudev.b2clogin.com/qsrulurudev.onmicrosoft.com/B2C_1A_SIGNUPORSIGNIN', // Choose SUSI as your default authority.
        knownAuthorities: ['qsrulurudev.b2clogin.com'], // Mark your B2C tenant's domain as trusted.
        redirectUri: '/login-callback', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: '/logout-callback', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
      },
      cache: {
        cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
      },
      system: {
        loggerOptions: {
          loggerCallback: (level, message, containsPii) => {
            if (containsPii) {
              return;
            }
            switch (level) {
              case LogLevel.Error:
                console.error(message);
                return;
              case LogLevel.Info:
                console.info(message);
                return;
              case LogLevel.Verbose:
                console.debug(message);
                return;
              case LogLevel.Warning:
                console.warn(message);
                return;
              default:
                return null;
            }
          },
        },
      },
    },
    b2cPolicies: {
      names: {
        signUpSignIn: 'B2C_1A_SIGNUPORSIGNIN',
        forgotPassword: 'B2C_1A_PASSWORDRESET',
        editProfile: 'B2C_1A_PROFILEEDIT',
      },
      authorities: {
        signUpSignIn: {
          authority:
            'https://qsrulurudev.b2clogin.com/qsrulurudev.onmicrosoft.com/B2C_1A_SIGNUPORSIGNIN',
        },
        forgotPassword: {
          authority:
            'https://qsrulurudev.b2clogin.com/qsrulurudev.onmicrosoft.com/B2C_1A_PASSWORDRESET',
        },
        editProfile: {
          authority:
            'https://qsrulurudev.b2clogin.com/qsrulurudev.onmicrosoft.com/B2C_1A_PROFILEEDIT',
        },
      },
      authorityDomain: 'qsrulurudev.b2clogin.com',
    },
    loginRequest: {
      scopes: [
        'https://qsrulurudev.onmicrosoft.com/04e2c37f-0ff0-4a10-b574-38629fb3d08f/access_as_user',
      ],
    },
  },
  MAX_CONCURRENT_UPLOAD: 3,
  MAX_RANGE_TIME_RETRY: 60,
  ToastNotificationDefaultConfig: {
    showCloseAllBtn: false,
    position: 'CustomTopLeftPosition',
  },
  AUTO_SAVE_INTERVAL: 60,
  AUTO_SAVE_DEBOUNCE_TIME: 30,
  SUPPORT_FILE_TYPE:
    '.MP3,.M4A,.WAV,.AAC,.AIFF,.AMR,.ASF,.AU,.CAF,.FLAC,.RA,.MP4,.AVI,.MOV,.3GP,.WMV,.FLV,.MKV,.WEBM,.MPG,.OGG',
  CHECKING_TRANSCRIPTION_STATUS_INTERVAL: 120, // in second
  CHECKING_AUDIO_LENGTH_INTERVAL: 10, // in second
  SignalRDomain: 'https://uluru-transcription-dev-api.azurewebsites.net',
  remainingDaysToNotify: 10,
  remainingTimeThresholdInMinutes: 999,
  contactLink: 'https://qsrinternational.com/nvivo/contact-us/contact-support',
  privacyLink:
    'https://qsrinternational.com/legal/privacy-policy?utm_source=NVivoTranscription&utm_medium=myNVivoPlatform&utm_campaign=myNVivoPlatform&utm_term=myNVivo&utm_content=myNVivo',
  termsLink: 'https://www.qsrinternational.com/terms-and-conditions',
  legalLink:
    'https://qsrinternational.com/legal?utm_source=NVivoTranscription&utm_medium=myNVivoPlatform&utm_campaign=myNVivoPlatform&utm_term=myNVivo&utm_content=myNVivo',
  nvivoLink:
    'https://qsrinternational.com/nvivo/home?utm_source=NVivoTranscription&utm_medium=myNVivoPlatform&utm_campaign=myNVivoPlatform&utm_term=myNVivo&utm_content=myNVivo',
  customDictionaryHelpLink:
    'https://redirect2.qsrinternational.com/help-transcription-dictionary-learnmore.htm',
  transcriptionHelpLink:
    'https://redirect2.qsrinternational.com/help-transcription-supportmenu-home.htm',
  whatsNewLink:
    'https://redirect2.qsrinternational.com/help-transcription-supportmenu-whatsnew.htm',
};
