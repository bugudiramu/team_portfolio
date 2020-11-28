import React from 'react';
import './CustomTextInputStyles.css';

const CustomTextInput = ({ placeholder }) => {
  return (
    <input type='text' placeholder={placeholder} className='customTextInput' />
  );
};

export default CustomTextInput;
