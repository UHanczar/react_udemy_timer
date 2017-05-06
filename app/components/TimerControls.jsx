import React from 'react';

const TimerControls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  // componentWillReceiveProps(newProps) {
  //   console.log('component will receive props', newProps.countdownStatus);
  // },

  onStatusChange(newStatus) {
    // or onstead of return arrow function here we can write in render
    // onClick={() => this.onStatusChange('stated')
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
  
  render() {
    const {countdownStatus} = this.props;
    const renderStartStopButton = () => {
      if (countdownStatus === 'stopped' || countdownStatus === 'paused') {
        return <button  className='button secondary' onClick={this.onStatusChange('started')}>Start</button>
      } else if (countdownStatus === 'started') {
        return <button  className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>
      }
    };

    return(
      <div className='controls'>
        {renderStartStopButton()}
        <button className='button alert hollow' onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

export default TimerControls;
