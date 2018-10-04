/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_CURRENT_USER,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_ERROR,
  CURRENT_USER_POSTS_SUCCESS,
  CURRENT_USER_POSTS_ERROR,
} from './constants';

export const initialState = fromJS({
  currentUserLoading: false,
  currentUserError: false,
  currentUser: null,
  currentUserPostsLoading: false,
  currentUserPostsError: false,
  currentUserPosts: null,
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CURRENT_USER:
      return state
        .set('currentUserLoading', true)
        .set('currentUserError', false)
        .set('currentUser', null);
    case CURRENT_USER_SUCCESS:
      return state
        .set('currentUser', action.currentUser)
        .set('currentUserError', false)
        .set('currentUserLoading', false)
        .set('userPostsLoading', true)
        .set('userPostsError', false)
        .set('currentUserPosts', null);
    case CURRENT_USER_ERROR:
      return state
        .set('currentUser', null)
        .set('currentUserError', action.error)
        .set('currentUserLoading', false);
    case CURRENT_USER_POSTS_SUCCESS:
      return state
        .set('currentUserPostsLoading', false)
        .set('currentUserPostsError', false)
        .set('currentUserPosts', action.userPosts);
    case CURRENT_USER_POSTS_ERROR:
      return state
        .set('currentUserPostsLoading', false)
        .set('currentUserPostsError', true)
        .set('currentUserPosts', null);
    default:
      return state;
  }
}

export default profilePageReducer;
