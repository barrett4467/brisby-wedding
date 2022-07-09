import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

ReactDOM.render(
  (
    <Countdown date={Date.now() + 5000}>
      <h1>Countdown</h1>
    </Countdown>
  ),
  document.getElementById('root')
);
