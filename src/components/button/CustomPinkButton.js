import React from 'react';
import './CustomPinkButtonStyles.css';

const CustomPinkButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='hvr-shutter-out-horizontal-pink customPinkButton'
    >
      {text}
    </button>
  );
};

export default CustomPinkButton;
