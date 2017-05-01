import React from 'react';

import Clock from './Clock';

const Countdown = React.createClass({
  render() {
    return(
      <div><Clock totalSeconds={129} /></div>
    );
  }
});

export default Countdown;
