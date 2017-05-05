import React from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

const Countdown = React.createClass({
  getInitialState() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  // componentWillUpdate(nextProps, nextState) {
  //
  // },

  componentDidUpdate(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          // console.log(this.timer);
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

  // componentWillMount() {
  //   console.log('component will mount');
  // },
  //
  // componentDidMount() {
  //   console.log('component Did Mount');
  // },
  //
  componentWillUnmount() {
    // console.log('component Did Unmount.');
    clearInterval(this.timer);
    this.timer = undefined;
  },

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0) {
        this.setState({ countdownStatus: 'stopped' });
      }
    }, 1000);
  },

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  handleStatusChandge(newStatus) {
    console.log(newStatus);
    this.setState({
      countdownStatus: newStatus
    });
  },

  render() {
    const { count, countdownStatus } = this.state;
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChandge} />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    };

    return(
      <div>
        <h1 className='page-title'>Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

export default Countdown;
