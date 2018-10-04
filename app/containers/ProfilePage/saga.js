import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_CURRENT_USER, LOAD_CURRENT_USER_POSTS } from './constants';
import {
  currentUserLoaded,
  currentUserLoadingError,
  currentUserPostsLoaded,
  currentUserPostsLoadingError,
  loadCurrentUserPosts,
} from './actions';

export function* getUserPosts(action) {
  const requestURL = `https://jsonplaceholder.typicode.com/posts?userId=${
    action.userId
  }`;

  try {
    const posts = yield call(request, requestURL);
    yield put(currentUserPostsLoaded(posts));
  } catch (e) {
    yield put(currentUserPostsLoadingError(e));
  }
}

export function* getCurrentUser(action) {
  const requestURL = `https://jsonplaceholder.typicode.com/users/${action.id}`;

  try {
    const currentUser = yield call(request, requestURL);
    yield put(currentUserLoaded(currentUser));

    yield put(loadCurrentUserPosts(currentUser.id));
  } catch (e) {
    yield put(currentUserLoadingError(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOAD_CURRENT_USER, getCurrentUser);
  yield takeLatest(LOAD_CURRENT_USER_POSTS, getUserPosts);
}
