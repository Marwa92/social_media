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
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadUsers } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    // dispatch load user action
    // const { currentUser } = this.props;
    this.props.loadUsers();
  }

  render() {
    const { users, usersError } = this.props;
    let Content = <h1>Loading...</h1>;
    if (users) {
      Content = users.map(user => (
        <li key={user.id}>
          <b> {user.name}:</b>
        </li>
      ));
    }
    if (usersError) {
      Content = <h1>Error loading user</h1>;
    }
    return <div>{Content}</div>;
  }
}

HomePage.propTypes = {
  loadUsers: PropTypes.func.isRequired,
  users: PropTypes.array,
  usersError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  hompage: makeSelectHomePage(),
  users: makeSelectUsers(),
  usersError: makeSelectUsersError(),
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
