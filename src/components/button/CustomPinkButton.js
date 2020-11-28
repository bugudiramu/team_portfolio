import React from 'react';
import './CustomPinkButtonStyles.css';

const CustomPinkButton = ({ text }) => {
  return (
    <button className='hvr-shutter-out-horizontal-pink customPinkButton'>
      {text}
    </button>
  );
};

export default CustomPinkButton;
