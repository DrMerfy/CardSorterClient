// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({username, profilePic}) => (
  <header>
    <a href="/" id="logo">Card Sorter</a>
    <div className="profile">
      <p>{username}</p>
      <img src={profilePic} alt='Profile' />
    </div>
  </header>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
};


export default Header;