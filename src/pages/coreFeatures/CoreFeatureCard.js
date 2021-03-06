import React from 'react';
import './CoreFeaturesStyles.css';

const CoreFeatureCard = (props) => {
  const { title, description } = props.feature;
  return (
    <div className='core-feature-card'>
      <img
        src='https://cdn0.iconfinder.com/data/icons/household-outline-2/48/bucket-pail-512.png'
        alt='icon'
        className='core-feature-card-img'
      />
      <div className='core-feature-card-text'>
        <h3 className='core-featrure-card-title'>{title}</h3>
        <p className='core-featrure-card-subtitle'>{description}</p>
      </div>
    </div>
  );
};

export default CoreFeatureCard;
