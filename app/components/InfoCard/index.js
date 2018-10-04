/**
 *
 * InfoCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class InfoCard extends React.Component {
  render() {
    const { currentUser, currentUserError } = this.props;
    let Header = <h1>Loading...</h1>;
    if (currentUser) {
      Header = (
        <div>
          <h1>Name: {currentUser.name}</h1>
          <h1>Phone: {currentUser.phone}</h1>
          <h1>Company Name: {currentUser.company.name}</h1>
        </div>
      );
    }
    if (currentUserError) {
      Header = <h1>Error loading user</h1>;
    }

    return <div>{Header}</div>;
  }
}

InfoCard.propTypes = {
  currentUser: PropTypes.object,
  currentUserError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default InfoCard;
