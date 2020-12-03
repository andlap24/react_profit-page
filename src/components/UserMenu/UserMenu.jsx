import React, { useState } from 'react';
import './UserMenu.scss';

import settingsIcon from '../../images/icons/settings-icon.svg';
import gridIcon from '../../images/icons/grid-icon.svg';

import users from '../../api/users';
import { SecondaryMenu } from '../SecondaryMenu';

export const UserMenu = () => {
  const selectedId = 2;
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const openSecondaryMenu = () => {
    setMenuIsVisible(true);
  };

  const closeSecondaryMenu = () => {
    setMenuIsVisible(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      openSecondaryMenu();
    }
  };

  return (
    <div className="menu">
      <div className="menu__primary">
        <div className="menu__user-list list">
          {users.map(user => (
            user.loggedIn === true
              ? (
                <button
                  key={user.id}
                  className="list__item"
                  type="button"
                  onClick={openSecondaryMenu}
                  onKeyPress={event => handleKeyPress(event)}
                >
                  <img
                    className="list__img"
                    src={user.profileImage}
                    alt={user.name}
                  />
                </button>
              )
              : null
          ))}
        </div>
        <div className="menu__buttons btn">
          <img
            src={gridIcon}
            alt=""
            className="btn__grid"
          />
          <img
            src={settingsIcon}
            alt=""
            className="btn__settings"
          />
        </div>
      </div>
      {menuIsVisible && (
        <SecondaryMenu
          selectedId={selectedId}
          closeSecondaryMenu={closeSecondaryMenu}
        />
      )}
    </div>
  );
};
