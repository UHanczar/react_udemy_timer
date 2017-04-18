import React from 'react';

import Navigation from './Navigation';

const Main = (props) => {
  return (
    <div>
      <Navigation />
      <div>
        <div>
          <p>Main JSX rendered.</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Main;
