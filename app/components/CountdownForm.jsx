import React from 'react';

const CountdownForm = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    const strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/g)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },

  render() {
    return (
      <div>
        <form ref='form' onSubmit={this.onSubmit} className='countdown-form'>
          <input type='text' ref='seconds' placeholder='Enter time in seconds' />
          <button className='button expanded'>Start</button>
        </form>
      </div>
    );
  }
});

export default CountdownForm;
