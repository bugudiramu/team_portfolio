import React from 'react';
import './AboutStyles.css';
import AboutItem from './AboutItem';
import kk from './../../assets/kk.jpg';
import ramu from './../../assets/ramu.jpeg';

const About = () => {
  return (
    <div className='about-container'>
      <AboutItem
        image={ramu}
        name='Ramu B'
        designation='FullStack Web/Mobile Developer'
      />
      <AboutItem
        image={kk}
        name='Kalyan Kumar K'
        designation='FullStack Web/Mobile Developer'
      />
    </div>
  );
};

export default About;
