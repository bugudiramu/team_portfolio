import React from 'react';
import './AboutStyles.css';

const AboutItem = (props) => {
  const { name, designation, image } = props;
  return (
    <div className='about-item-container'>
      <img src={image} alt='' className='about-image' />
      <h4 style={{ marginTop: '0.8rem' }}>{name}</h4>
      <p style={{ fontSize: 13, color: 'gray', margin: '0.5rem 0' }}>
        {designation}
      </p>
      <div></div>
    </div>
  );
};

export default AboutItem;
