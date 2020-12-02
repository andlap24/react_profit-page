import React from 'react';
import PropTypes from 'prop-types';
import './SecondaryMenu.scss';

import users from '../../api/users';
import searchIcon from '../../images/icons/search-icon.svg';
import settingsIcon from '../../images/icons/settings-icon.svg';
import activeIcon from '../../images/icons/active-circle-icon.svg';
import awayIcon from '../../images/icons/away-circle-icon.svg';

export const SecondaryMenu = ({ selectedId }) => (
  <div className="menu__secondary">
    <div className="menu__nav nav">
      <div>
        <p className="nav__title">menu</p>
        <ul className="nav__list">
          <li className="nav__link nav__link--active">Profit</li>
          <li className="nav__link">Explore</li>
          <li className="nav__link">Profile</li>
          <li className="nav__link">Photos</li>
          <li className="nav__link">Videos</li>
          <li className="nav__link">Invite</li>
          <li className="nav__link">Music</li>
          <li className="nav__link">Candidates</li>
          <li className="nav__link">Calendar</li>
          <li className="nav__link">Feedback</li>
          <li className="nav__link">Help</li>
        </ul>
        <div className="nav__search-bar search-bar">
          <label>
            <input
              type="text"
              className="search-bar__input"
              placeholder="Search"
            />
          </label>
          <img
            src={searchIcon}
            className="search-bar__icon"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="menu__chat chat">
      <div className="chat__top">
        <p>friends</p>
        <img src={settingsIcon} alt="" />
      </div>
      <div className="chat__friends">
        {users.map(user => (
          user.connect === selectedId
            ? (
              <div className="chat__friend">
                <div className="chat__friend-img">
                  <img
                    src={user.profileImage}
                    alt=""
                    className="chat__friend-avatar"
                    width="43px"
                    height="43px"
                  />
                  {user.status === 'online'
                    ? (
                      <img
                        src={activeIcon}
                        alt=""
                        className="chat__friend-status"
                      />
                    )
                    : (
                      <img
                        src={awayIcon}
                        alt=""
                        className="chat__friend-status"
                      />
                    )
                  }
                </div>
                <div className="chat__friend-info">
                  <p className="chat__friend-name">
                    {user.name}
                  </p>
                  <p className="chat__friend-position">
                    {user.position}
                  </p>
                </div>
              </div>
            )
            : null
        ))}
      </div>
    </div>
  </div>
);

SecondaryMenu.propTypes = {
  selectedId: PropTypes.number.isRequired,
};
