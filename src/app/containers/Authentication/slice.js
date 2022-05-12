/*
 *
 * Authentication reducer
 *
 */
import { set, flow } from 'lodash/fp';
import { createSlice } from '@reduxjs/toolkit';
import { ACTION_STATUS } from 'utils/constants';

const initialState = {};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthenticatedRequest(state, action) {
      return flow(
        set('status', ACTION_STATUS.PENDING),
        set('authInfo', action.payload),
      )(state);
    },
    setAuthenticated(state) {
      return flow(
        set('status', ACTION_STATUS.SUCCESS),
        set('isAuthenticated', true),
      )(state);
    },
    logout(state) {
      return flow(set('isAuthenticated', false))(state);
    },
    resetState() {
      return { ...initialState };
    },
  },
});
export const { actions, reducer, name: sliceKey } = authenticationSlice;
