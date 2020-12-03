import React from 'react';
import './ProfitEvents.scss';

export const ProfitEvents = () => (
  <div className="events">
    <h4 className="events__topic">Upcoming Events with Jordan</h4>
    <div className="events__item">
      <p>Super Photography 2016</p>
      <p className="events__category events__category--dark-blue">
        Photography
      </p>
    </div>
    <date className="events__date">
      January 13th, Vienna - 6:30 PM
    </date>
    <div className="events__item">
      <p>Photo Expo</p>
      <p className="events__category events__category--turquoise">
        Design
      </p>
    </div>
    <date className="events__date">
      March 28th, Paris - 7:30 PM
    </date>
  </div>
);
