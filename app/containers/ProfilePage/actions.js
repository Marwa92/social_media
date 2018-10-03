/*
 *
 * ProfilePage actions
 *
 */

import {
  LOAD_CURRENT_USER,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadCurrentUser(id) {
  return {
    type: LOAD_CURRENT_USER,
    id,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {object} currentUser
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function currentUserLoaded(currentUser) {
  return {
    type: CURRENT_USER_SUCCESS,
    currentUser,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function currentUserLoadingError(error) {
  return {
    type: CURRENT_USER_ERROR,
    error,
  };
}
