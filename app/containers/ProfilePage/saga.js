import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_CURRENT_USER } from './constants';
import { currentUserLoaded, currentUserLoadingError } from './actions';

export function* getCurrentUser(action) {
  const requestURL = `https://jsonplaceholder.typicode.com/users/${action.id}`;

  try {
    const currentUser = yield call(request, requestURL);
    yield put(currentUserLoaded(currentUser));
  } catch (e) {
    yield put(currentUserLoadingError(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOAD_CURRENT_USER, getCurrentUser);
}
