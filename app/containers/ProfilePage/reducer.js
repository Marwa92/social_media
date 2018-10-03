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
        .set('currentUserLoading', true)
        .set('currentUserError', false)
        .set('currentUser', null);
    case CURRENT_USER_SUCCESS:
      return state
        .set('currentUser', action.currentUser)
        .set('currentUserError', false)
        .set('currentUserLoading', false);
    case CURRENT_USER_ERROR:
      return state
        .set('currentUser', null)
        .set('currentUserError', action.error)
        .set('currentUserLoading', false);
    default:
      return state;
  }
}

export default profilePageReducer;
