import React from 'react';
import './CustomCyanButtonStyles.css';

const CustomCyanButton = ({ text }) => {
  return (
    <button className='hvr-shutter-out-horizontal-cyan customCyanButton'>
      {text}
    </button>
  );
};

export default CustomCyanButton;
