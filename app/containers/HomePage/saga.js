import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_USERS } from './constants';
import {
  usersLoaded,
  usersLoadingError,
  // loadUsersPosts,
  // usersPostsLoaded,
  // usersPostsLoadingError,
} from './actions';

// export function* getUsersPosts(action) {
//   const requestURL = `https://jsonplaceholder.typicode.com/posts?userId=${
//     action.userId
//   }`;
//
//   try {
//     const posts = yield call(request, requestURL);
//     yield put(usersPostsLoaded(posts));
//   } catch (e) {
//     yield put(usersPostsLoadingError(e));
//   }
// }

export function* getUsers() {
  const requestURL = `https://jsonplaceholder.typicode.com/users`;

  try {
    const users = yield call(request, requestURL);
    yield put(usersLoaded(users));
    //
    // yield put(loadUsersPosts(users.id));
  } catch (e) {
    yield put(usersLoadingError(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOAD_USERS, getUsers);
  // yield takeLatest(LOAD_USERS_POSTS, getUsersPosts);
}
