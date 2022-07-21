/*
 *
 * Authentication reducer
 *
 */
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { createSlice } from '@reduxjs/toolkit';
import { ACTION_STATUS } from 'utils/constants';

const initialState = {
  listKeys: {
    status: null,
    error: null,
    response: null,
  },
};

const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    fetchListKeysStart(state, action) {
      return flow(set('listKeys.status', ACTION_STATUS.PENDING))(state);
    },
    fetchListKeysSuccess(state, action) {
      return flow(
        set('listKeys.response', action.payload),
        set('listKeys.status', ACTION_STATUS.SUCCESS),
      )(state);
    },
    fetchListKeysFailure(state, action) {
      return flow(
        set('listKeys.error', action.payload),
        set('listKeys.status', ACTION_STATUS.FAILED),
      )(state);
    },

    resetState() {
      return { ...initialState };
    },
  },
});
export const { actions, reducer, name: sliceKey } = homepageSlice;
