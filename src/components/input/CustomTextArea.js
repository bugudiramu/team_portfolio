import React from 'react';
import './CustomTextInputStyles.css';

const CustomTextArea = ({ placeholder }) => {
  return (
    <textarea
      maxLength='50'
      placeholder={placeholder}
      className='customTextArea'
    />
  );
};

export default CustomTextArea;
