/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_USERS,
  USERS_SUCCESS,
  USERS_ERROR,
  LOAD_USERS_POSTS,
  USERS_POSTS_SUCCESS,
  USERS_POSTS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadUsers(id) {
  return {
    type: LOAD_USERS,
    id,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} users
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function usersLoaded(users) {
  return {
    type: USERS_SUCCESS,
    users,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function usersLoadingError(error) {
  return {
    type: USERS_ERROR,
    error,
  };
}

/**
 * @return {object} An action object with a type of LOAD_REPOS
 */

export function loadUsersPosts(userId) {
  return {
    type: LOAD_USERS_POSTS,
    userId,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} userPosts
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function usersPostsLoaded(userPosts) {
  return {
    type: USERS_POSTS_SUCCESS,
    userPosts,
  };
}

/*
* Dispatched when loading the repositories fails
*
* @param  {object} error The error
*
* @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
*/
export function usersPostsLoadingError(error) {
  return {
    type: USERS_POSTS_ERROR,
    error,
  };
}
