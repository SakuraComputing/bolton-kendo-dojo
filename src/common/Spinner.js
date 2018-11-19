import React from 'react';
import spinner from '../styles/img/util/spinner.gif';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img 
        className="spinner"
        src={spinner}
        alt="Loading..."
      />
    </div>
  )
}
export default Spinner;
