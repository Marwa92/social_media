import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profilePage state domain
 */

const selectProfilePageDomain = state => state.get('profilePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfilePage
 */

const makeSelectProfilePage = () =>
  createSelector(selectProfilePageDomain, substate => substate.toJS());

const makeSelectCurrentUser = () =>
  createSelector(selectProfilePageDomain, profileState =>
    profileState.get('currentUser'),
  );

const makeSelectCurrentUserError = () =>
  createSelector(selectProfilePageDomain, profileState =>
    profileState.get('currentUserError'),
  );

export default makeSelectProfilePage;
export {
  selectProfilePageDomain,
  makeSelectCurrentUser,
  makeSelectCurrentUserError,
};
