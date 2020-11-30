import React from 'react';
import './ProfitStats.scss';

import users from '../../api/users.json';

export const ProfitStats = () => (
  users.map(user => (
    user.id === 2
      ? (
        <div className="stats">
          <div className="stats__stat stat">
            <div className="stat__head">
              <h3 className="stat__sum">{user.newOrders}</h3>
              <p className="stat__name stat__name--blue">new orders</p>
            </div>
            <div className="stat__footer footer">
              <div className="footer__icon footer__icon--increase">&#9650;</div>
              <p>13% increase</p>
            </div>
          </div>

          <div className="stats__stat stat">
            <div className="stat__head">
              <h3 className="stat__sum">{user.totalSales}</h3>
              <p className="stat__name stat__name--green">total sales</p>
            </div>
            <div className="stat__footer footer">
              <div className="footer__icon footer__icon--increase">&#9650;</div>
              <p>4% increase</p>
            </div>
          </div>

          <div className="stats__stat stat">
            <div className="stat__head">
              <h3 className="stat__sum">{user.totalPaidOut}</h3>
              <p className="stat__name stat__name--orange">total paid out</p>
            </div>
            <div className="stat__footer footer">
              <div className="footer__icon footer__icon--decrease">&#9660;</div>
              <p>21% decrease</p>
            </div>
          </div>

          <div className="stats__stat stat">
            <div className="stat__head">
              <h3 className="stat__sum">{user.newCustomers}</h3>
              <p className="stat__name stat__name--red">new customers</p>
            </div>
            <div className="stat__footer footer">
              <div className="footer__icon footer__icon--decrease">&#9660;</div>
              <p>5% decrease</p>
            </div>
          </div>
        </div>
      )
      : null
  ))
);
