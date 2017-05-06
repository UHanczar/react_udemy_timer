import React from 'react';

import Clock from './Clock';
// we can import TimerControls file either
// in this case in render 'countdownStatus' in TimerControls
// should be changed on 'timerStatus'
import TimerControls from './Controls';

const Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },

  componentWillMount() {
    console.log(this.state.timerStatus);
  },

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.timerStatus);
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
          case 'stopped':
            this.setState({ count: 0 });
          case 'paused':
            clearInterval(this.start);
            this.start = undefined;
            break;
      }
    }
  },

  componentWillUnmount() {
    // console.log('component Did Unmount.');
    clearInterval(this.timer);
    this.timer = undefined;
  },

  handleStart() {
    this.start = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });

      if(newCount > 6001) {
        this.setState({
          timerStatus: 'stopped'
        });
      }
    }, 1000);
  },

  handleStatusChandge(newTimerStatus) {
    this.setState({
      timerStatus: newTimerStatus
    });
  },

  render: function() {
    const { count, timerStatus } = this.state;
    return (
      <div>
        <h1 className='page-title'>Timer App</h1>
        <Clock totalSeconds={count} />
        <TimerControls countdownStatus={timerStatus} onStatusChange={this.handleStatusChandge} />
      </div>
    );
  }
});

export default Timer;
