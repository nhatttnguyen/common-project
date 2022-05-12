/**
 *
 * Asynchronously loads the component for Login callback
 *
 */

import { lazyLoad } from 'utils/loadable';

const LoginCallback = lazyLoad(
  () => import('./index'),
  module => module.LoginCallback,
);

export default LoginCallback;
