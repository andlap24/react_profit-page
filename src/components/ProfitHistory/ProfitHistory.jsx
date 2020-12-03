import React from 'react';
import Chart from 'react-apexcharts';
import './ProfitHistory.scss';

export class ProfitHistory extends React.Component {
  state = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
        ],
      },
    },
    series: [
      {
        name: 'Earnings',
        data: [90, 310, 50, 100, 399, 100, 150, 110, 220],
      },
    ],
  };

  render() {
    return (
      <div className="earnings">
        <div className="earnings__heading heading">
          <p className="heading__title">Earnings History</p>
          <div className="heading__buttons buttons">
            <button className="buttons__btn" type="button">weekly</button>
            <button
              className="buttons__btn buttons__btn--active"
              type="button"
            >
              montly
            </button>
            <button className="buttons__btn" type="button">yearly</button>
          </div>
        </div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="750"
          height="230"
        />
      </div>
    );
  }
}
