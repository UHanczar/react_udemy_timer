import React from 'react';

import Clock from './Clock';
import TimerControls from './TimerControls';

const Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  componentWillMount() {
    console.log(this.state.countdownStatus);
  },

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.countdownStatus);
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
          case 'stopped':
            this.setState({ count: 0 });
          case 'paused':
            clearInterval(this.timer);
            this.timer = undefined;
            break;
      }
    }
  },

  componentWillUnmount() {
    // console.log('component Did Unmount.');
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });

      if(newCount > 20) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  },

  handleStatusChandge(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },

  render: function() {
    const { count, countdownStatus } = this.state;
    return (
      <div>
        <h1 className='page-title'>Timer App</h1>
        <Clock totalSeconds={count} />
        <TimerControls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChandge} />
      </div>
    );
  }
});

export default Timer;
