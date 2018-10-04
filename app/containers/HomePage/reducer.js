/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_USERS,
  USERS_SUCCESS,
  USERS_ERROR,
  USERS_POSTS_SUCCESS,
  USERS_POSTS_ERROR,
} from './constants';

export const initialState = fromJS({
  usersLoading: false,
  usersError: false,
  users: null,
  usersPostsLoading: false,
  usersPostsError: false,
  usersPosts: null,
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS:
      return state
        .set('usersLoading', true)
        .set('usersError', false)
        .set('users', null);
    case USERS_SUCCESS:
      return state
        .set('users', action.users)
        .set('usersError', false)
        .set('usersLoading', false)
        .set('usersPostsLoading', true)
        .set('usersPostsError', false)
        .set('usersPosts', null);
    case USERS_ERROR:
      return state
        .set('users', null)
        .set('usersError', action.error)
        .set('currentUserLoading', false);
    case USERS_POSTS_SUCCESS:
      return state
        .set('usersPostsLoading', false)
        .set('usersPostsError', false)
        .set('usersPosts', action.userPosts);
    case USERS_POSTS_ERROR:
      return state
        .set('usersPostsLoading', false)
        .set('usersPostsError', true)
        .set('usersPosts', null);
    default:
      return state;
  }
}

export default profilePageReducer;
