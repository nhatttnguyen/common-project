import { takeLatest, put, call, all, fork } from 'redux-saga/effects';

import authInfoUtils from 'utils/authInfoUtils';

import { LOGOUT_REQUEST } from './constants';
import { actions } from './slice';

/**
 * Login main logic generator
 * @param {AuthInfo} authInfos
 */

export function* authenticated(action) {
  yield call([authInfoUtils, 'storeAuthInfo'], action.payload);
  if (action.payload.isValid()) {
    yield put(actions.setAuthenticated());
  }
}

/**
 * Logout main logic generator
 */
export function* doLogout() {
  yield call(authInfoUtils.removeAuthInfo);
  yield put(actions.logout());
}

/**
 * logout saga watcher
 */
export function* logoutWatcher() {
  yield takeLatest(LOGOUT_REQUEST, doLogout);
}

/**
 * Login Saga watcher
 */
export function* loginWatcher() {
  yield takeLatest(actions.setAuthenticatedRequest, authenticated);
}

export default function* authenticationFlow() {
  yield all([fork(loginWatcher), fork(logoutWatcher)]);
}
