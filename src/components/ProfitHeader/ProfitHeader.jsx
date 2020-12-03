import React from 'react';
import './ProfitHeader.scss';

import userAvatar from '../../images/users/user2.png';
import userStatus from '../../images/icons/active-circle-icon.svg';

export const ProfitHeader = () => (
  <div className="header">
    <div className="header__title">Your Profit</div>
    <div className="header__info info">
      <div className="info__avatar">
        <img
          src={userAvatar}
          alt=""
          className="info__avatar-img"
        />
        <img
          src={userStatus}
          alt=""
          className="info__avatar-status"
        />
      </div>
      <div className="info__person person">
        <p className="person__name">
          Jordan J.
        </p>
        <p className="person__position">
          Administrator
        </p>
      </div>
      <div className="person__menu">&#8744;</div>
    </div>
  </div>
);
