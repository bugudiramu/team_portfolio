import React from 'react';
import './CustomTextInputStyles.css';

const CustomTextInput = ({ placeholder, onChange, value }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className='customTextInput'
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomTextInput;
