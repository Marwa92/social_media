/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import InfoCard from 'components/InfoCard';
import makeSelectProfilePage, {
  makeSelectCurrentUser,
  makeSelectCurrentUserError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadCurrentUser } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class ProfilePage extends React.Component {
  componentDidMount() {
    // dispatch load user action
    // const { currentUser } = this.props;
    const id =
      this.props.match && this.props.match.params
        ? this.props.match.params.id
        : null;
    this.props.loadCurrentUser(id);
  }

  render() {
    const { currentUser, currentUserError } = this.props;
    const InfoCardProps = {
      currentUser,
      currentUserError,
    };
    return <InfoCard {...InfoCardProps} />;
  }
}

ProfilePage.propTypes = {
  loadCurrentUser: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  currentUserError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  profilepage: makeSelectProfilePage(),
  currentUser: makeSelectCurrentUser(),
  currentUserError: makeSelectCurrentUserError(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadCurrentUser: id => dispatch(loadCurrentUser(id)),
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

/*
<h1>Name:{this.props.currentUser.name}</h1>
<h1>
  <span>Phone:{this.props.currentUser.phone} </span>
  <span>Company Name:{this.props.currentUser.company.name}</span>
</h1>
*/
