import React from 'react';
import './ProfitHeader.scss';

export const ProfitHeader = () => (
  <div className="header">
    <div className="header__title">Your Profit</div>
    <div className="header__info info">
      <div className="info__img" />
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
