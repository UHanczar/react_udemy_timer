import React from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';

const Countdown = React.createClass({
  getInitialState() {
    return {
      count: 0
    };
  },

  handleSetCoundown(seconds) {
    this.setState({
      count: seconds
    });
  },
  render() {
    const { count } = this.state;
    return(
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCoundown} />
      </div>
    );
  }
});

export default Countdown;
