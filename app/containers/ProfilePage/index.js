/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadCurrentUser } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ProfilePage extends React.Component {
  render() {
    this.props.loadCurrentUser();
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ProfilePage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  profilepage: makeSelectProfilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadCurrentUser: () => dispatch(loadCurrentUser()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'profilePage', reducer });
const withSaga = injectSaga({ key: 'profilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfilePage);
