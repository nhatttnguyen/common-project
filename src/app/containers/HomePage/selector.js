import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

const selectHomepageState = state => state.homepage;

export const selectListKeys = createSelector([selectHomepageState], state =>
  get('listKeys.response', state),
);
