import React from 'react';
import './ProfitReferrer.scss';

export const ProfitReferrer = () => (
  <div className="referrer">
    <table className="referrer__table table">
      <thead className="table__thead">
        <tr>
          <th>REFERRER</th>
          <th>Views</th>
          <th>Sales</th>
          <th>Conversion</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        <tr>
          <th>note.com</th>
          <td>54</td>
          <td>12</td>
          <td>10.5%</td>
          <td>$50</td>
        </tr>
        <tr>
          <th>Direct, email, IM</th>
          <td>96</td>
          <td>24</td>
          <td>25%</td>
          <td>$10</td>
        </tr>
        <tr>
          <th>Recommended</th>
          <td>5</td>
          <td>5</td>
          <td>100%</td>
          <td>$10</td>
        </tr>
        <tr>
          <th>Dribbble</th>
          <td>1</td>
          <td>0</td>
          <td>0.0%</td>
          <td>$0</td>
        </tr>
        <tr>
          <th>google.co.uk</th>
          <td>5</td>
          <td>0</td>
          <td>0.0%</td>
          <td>0</td>
        </tr>
        <tr>
          <th>google.com.tr</th>
          <td>0</td>
          <td>0</td>
          <td>0.0%</td>
          <td>0</td>
        </tr>
        <tr>
          <th>mail.google.com</th>
          <td>1</td>
          <td>0</td>
          <td>0.0%</td>
          <td>0</td>
        </tr>
        <tr>
          <th>facebook.com</th>
          <td>5</td>
          <td>0</td>
          <td>0.0%</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  </div>
);
