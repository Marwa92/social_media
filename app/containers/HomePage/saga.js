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

export function* getUser(id) {
  const requestURL = `https://jsonplaceholder.typicode.com/users/${id}`;

  try {
    const user = yield call(request, requestURL);
    return user;
  } catch (e) {
    return null;
  }
}

export function* getUsersPosts() {
  const requestURL = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const posts = yield call(request, requestURL);

    const updatedPosts = [];
    for (let i = 0; i < posts.length; i += 1) {
      const user = yield call(getUser, posts[i].userId);
      updatedPosts.push({
        user,
        ...posts[i],
      });
    }

    yield put(usersPostsLoaded(updatedPosts));
  } catch (e) {
    yield put(usersPostsLoadingError(e));
  }
}

export function* getUsers() {
  const requestURL = `https://jsonplaceholder.typicode.com/users`;

  try {
    const users = yield call(request, requestURL);
    const userId = users.map(user => user.id);
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
