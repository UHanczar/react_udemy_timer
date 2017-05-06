import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery/dist/jquery.min.js';
import TestUtils from 'react-addons-test-utils';

import Timer from './../../components/Timer';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);

    timer.handleStatusChandge('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      expect(timer.state.timerStatus).toBe('started');
      done();
    }, 1001);
  });

  it('should pause timer on paused status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({ count: 10 });
    timer.handleStatusChandge('started');
    timer.handleStatusChandge('paused');

    setTimeout(() => {
      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    }, 1001);
  });

  it('should stop timer on stopped status', (done) => {
    const timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({ count: 10 });
    timer.handleStatusChandge('started');
    timer.handleStatusChandge('stopped');

    setTimeout(() => {
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('stopped');
      done();
    }, 1001);
  });
});
