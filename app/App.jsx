import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// import Foundation from 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css';
import $ from 'jquery';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';

import Main from './components/Main';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

// See from here
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Timer} />
      <Route path='countdown' component={Countdown} />
    </Route>
  </Router>
  , document.getElementById('root'));
