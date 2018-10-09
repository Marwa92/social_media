/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage, {
  makeSelectUsers,
  makeSelectUsersError,
  makeSelectUsersPosts,
  makeSelectUsersPostsError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadUsers } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { usersPosts, usersPostsError } = this.props;

    let Posts = <h1>Loading...</h1>;

    if (usersPostsError) {
      Posts = <h1>Error loading posts</h1>;
    }

    if (usersPosts) {
      Posts = usersPosts.map(post => (
        <li key={post.id}>
          <b key={post.user.id}>{post.user.name}:</b>
          <span>{post.body}</span>
        </li>
      ));
    }
    return <div>{Posts}</div>;
  }
}

HomePage.propTypes = {
  loadUsers: PropTypes.func.isRequired,
  usersPosts: PropTypes.array,
  usersPostsError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  hompage: makeSelectHomePage(),
  users: makeSelectUsers(),
  usersError: makeSelectUsersError(),
  usersPosts: makeSelectUsersPosts(),
  usersPostsError: makeSelectUsersPostsError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => dispatch(loadUsers()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
