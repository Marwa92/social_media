import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CURRENT_USER } from './constants';

import request from 'utils/request';

export function* getCurrentUser() {
  console.log('in request');
  const requestURL = `https://jsonplaceholder.typicode.com/users/1`;

  try {
    const currentUser = yield call(request, requestURL);
    console.log('currentuser: ', currentUser);
  } catch (e) {
    console.log(e);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOAD_CURRENT_USER, getCurrentUser);
}
