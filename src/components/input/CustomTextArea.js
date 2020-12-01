import React from 'react';
import './CustomTextInputStyles.css';

const CustomTextArea = ({ placeholder }) => {
  return (
    <textarea
      maxLength='500'
      placeholder={placeholder}
      className='customTextArea'
    />
  );
};

export default CustomTextArea;
