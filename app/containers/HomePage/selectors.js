import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate.toJS());

const makeSelectUsers = () =>
  createSelector(selectHomePageDomain, homeState => homeState.get('users'));

const makeSelectUsersError = () =>
  createSelector(selectHomePageDomain, homeState =>
    homeState.get('usersError'),
  );

const makeSelectUsersPosts = () =>
  createSelector(selectHomePageDomain, homeState =>
    homeState.get('usersPosts'),
  );

const makeSelectUsersPostsError = () =>
  createSelector(selectHomePageDomain, homeState =>
    homeState.get('usersPostsError'),
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectUsers,
  makeSelectUsersError,
  makeSelectUsersPosts,
  makeSelectUsersPostsError,
};
