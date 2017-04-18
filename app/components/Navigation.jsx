import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = () => {
  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>React Time App</li>
          <li>
            <IndexLink to='/' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to='/countdown' activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'><span>See code on <a href='https://github.com/UHanczar/react_udemy_timer' target='_blank' rel='noopener noreferrer'>Github</a></span></li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
