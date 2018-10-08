import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_USERS, LOAD_USERS_POSTS } from './constants';
import {
  usersLoaded,
  usersLoadingError,
  loadUsersPosts,
  usersPostsLoaded,
  usersPostsLoadingError,
} from './actions';

export function* getUsersPosts() {
  const requestURL = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const posts = yield call(request, requestURL);
    const postId = posts.map(post => post.id);
    console.log('posts:', postId);
    yield put(usersPostsLoaded(posts));
  } catch (e) {
    yield put(usersPostsLoadingError(e));
  }
}

export function* getUsers() {
  const requestURL = `https://jsonplaceholder.typicode.com/users`;

  try {
    const users = yield call(request, requestURL);
    const userId = users.map(user => user.id);
    console.log('test:', userId);
    yield put(usersLoaded(users));
    yield put(loadUsersPosts(userId));
  } catch (e) {
    yield put(usersLoadingError(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOAD_USERS, getUsers);
  yield takeLatest(LOAD_USERS_POSTS, getUsersPosts);
}
