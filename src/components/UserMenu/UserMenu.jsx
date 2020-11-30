/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './UserMenu.scss';

import users from '../../api/users.json';

export const UserMenu = () => {
  /* const handleSelectedUser = (selectedUser) => {
    users.map(user => selectedUser === user.id);
  }; */

  const temp = 'menu';

  return (
    <div className="menu">
      <div className="menu__user-list list">
        {users.map(user => (
          user.loggedIn === true
            ? (
              <div className="list__item" />
              // eslint-disable-next-line indent
                /* <img
                  src={user.profileImage}
                  alt={user.name}
                  onClick={handleSelectedUser}
                />
              </div> */
            )
            : null
        ))}
      </div>
      <div className="menu__nav nav">
        <p className="nav__title">{temp}</p>
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
      </div>
    </div>
  );
};
