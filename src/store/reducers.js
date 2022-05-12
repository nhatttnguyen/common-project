/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authenticationReducer } from 'app/containers/Authentication/slice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error

  return combineReducers({
    authentication: authenticationReducer,
    ...injectedReducers,
  });
}
