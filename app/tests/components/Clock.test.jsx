import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery/dist/jquery.min.js';
import TestUtils from 'react-addons-test-utils';

import Clock from './../../components/Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      const el = TestUtils.isElement(<Clock />);
      expect(el).toBe(true);
    });

    describe('render', () => {
      it('should render clock to output', () => {
        const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
        const $el = $(ReactDOM.findDOMNode(clock));
        const actualText = $el.find('.clock-text').text();

        expect(actualText).toBe('01:02');
      });
    });

    it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 615;
      const expected = '10:15';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec a less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      // console.log(clock);
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
