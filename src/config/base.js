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
};
