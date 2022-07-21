import { takeLatest, put, call, all, fork } from 'redux-saga/effects';

import { actions } from './slice';

import AccountFetcher from 'app/fetchers/AccountFetcher';

/**
 *  Set current user info watcher
 */

export function* fetchListKeysWatcher() {
  yield takeLatest(actions.fetchListKeysStart, fetchListKeysHandler);
}

export function* fetchListKeysHandler() {
  try {
    // const { response } = yield call([AccountFetcher, 'fetchListKeys']);
    const response = [
      {
        id: null,
        name: 'New category 1',
        reservedData: null,
        staticIDs: null,
        internalStatus: 0,
        projectKey: null,
      },
      {
        id: null,
        name: 'New category 2',
        reservedData: null,
        staticIDs: null,
        internalStatus: 0,
        projectKey: null,
      },
    ];
    yield put(actions.fetchListKeysSuccess(response));
  } catch (error) {
    yield put(actions.fetchListKeysFailure(error));
  }
}
export default function* dashboardSaga() {
  yield all([fork(fetchListKeysWatcher)]);
}
