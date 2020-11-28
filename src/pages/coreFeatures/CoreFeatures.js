import React from 'react';
import CoreFeatureCard from './CoreFeatureCard';
import './CoreFeaturesStyles.css';
import CustomPinkButton from './../../components/button/CustomPinkButton';

const CoreFeatures = () => {
  return (
    <div className='core-features-container'>
      <div class='scroll-left'>
        <p>CSS scrolling text... </p>
      </div>

      <h1 className='core-features-container-heading'>Core Features</h1>
      <p className='core-features-container-para'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
        nihil, reiciendis unde pariatur asperiores placeat.
      </p>
      <div className='core-features-flex-1'>
        <CoreFeatureCard />
        <CoreFeatureCard />
        <CoreFeatureCard />
      </div>
      <div className='core-features-flex-1'>
        <CoreFeatureCard />
        <CoreFeatureCard />
        <CoreFeatureCard />
      </div>
      <div className='button-container'>
        <CustomPinkButton text='more about us' />
      </div>
    </div>
  );
};

export default CoreFeatures;
