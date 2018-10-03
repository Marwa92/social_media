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
} from './constants';

export const initialState = fromJS({
  currentUserLoading: false,
  currentUserError: false,
  currentUser: null,
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CURRENT_USER:
      return state
        .set('loading', true)
        .set('error', false)
        .set('currentUser', null);
    case CURRENT_USER_SUCCESS:
      return state
        .set('currentUser', action.user)
        .set('error', false)
        .set('loading', false);
    case CURRENT_USER_ERROR:
      return state
        .set('currentUser', null)
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default profilePageReducer;
