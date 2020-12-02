import React from 'react';
import './UserMenu.scss';

import users from '../../api/users';
import { SecondaryMenu } from '../SecondaryMenu';

export const UserMenu = () => {
  const selectedId = 2;

  return (
    <div className="menu">
      <div className="menu__user-list list">
        {users.map(user => (
          user.loggedIn === true
            ? (
              <button className="list__item" type="button">
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
      <SecondaryMenu selectedId={selectedId} />
    </div>
  );
};
