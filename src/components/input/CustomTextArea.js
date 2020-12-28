import React from 'react';
import './CustomTextInputStyles.css';

const CustomTextArea = ({ placeholder, onChange, value }) => {
  return (
    <textarea
      maxLength='500'
      placeholder={placeholder}
      className='customTextArea'
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomTextArea;
