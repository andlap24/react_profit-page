import React from 'react';
import './App.scss';

import { UserMenu } from './components/UserMenu';
import { ProfitHeader } from './components/ProfitHeader';
import { ProfitHistory } from './components/ProfitHistory';
import { ProfitStats } from './components/ProfitStats';
import { ProfitReferrer } from './components/ProfitReferrer';
import { UserInfo } from './components/UserInfo';
import { ProfitEvents } from './components/ProfitEvents';

export const App = () => (
  <div className="wrapper">
    <section className="menu">
      <UserMenu />
    </section>
    <section className="profit">
      <div className="profit__header">
        <ProfitHeader />
      </div>
      <div className="profit__main main">
        <div className="info__summary">
          <ProfitHistory />
          <ProfitStats />
          <ProfitReferrer />
        </div>
        <div className="info__user">
          <UserInfo />
          <ProfitEvents />
        </div>
      </div>
    </section>
  </div>
);
