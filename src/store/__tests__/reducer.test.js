import { createReducer } from '../reducers';
import { Reducer } from '@reduxjs/toolkit';

describe('reducer', () => {
  it('should inject reducers', () => {
    const dummyReducer = (s = {}, a) => 'dummyResult';
    const reducer = createReducer({ test: dummyReducer });
    const state = reducer({}, '');
    expect(state.test).toBe('dummyResult');
  });
});
