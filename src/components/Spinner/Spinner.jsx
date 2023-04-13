import React from 'react';
import './index.css';

const Spinner = () => (
  <>
    <div className="alert">
      <strong>Alert!</strong>
      {' '}
      It can take up to 1 minute depending on the server speed, please wait
    </div>
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </>
);

export default Spinner;
