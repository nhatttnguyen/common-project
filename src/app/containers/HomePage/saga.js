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
        id: 1,
        title: 'Test 1',
        bibTeXKey: 'bibTeXKey 1',
        citationKey: 'citationKey 1',
      },
      {
        id: 2,
        title: 'Test 2',
        bibTeXKey: 'bibTeXKey 2',
        citationKey: 'citationKey 2',
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
