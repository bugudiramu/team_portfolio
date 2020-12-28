import React from 'react';
import './CustomPinkButtonStyles.css';

const CustomDisabledButton = ({ text }) => {
  return (
    <button className='customDisabledButton' disabled={true}>
      {text}
    </button>
  );
};

export default CustomDisabledButton;
