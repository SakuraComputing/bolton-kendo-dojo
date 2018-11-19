import React from 'react';
import spinner from '../../public/img/util/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img 
        className="spinner"
        src={spinner}
        alt="Loading..."
      />
    </div>
  )
}
export default Spinner;
