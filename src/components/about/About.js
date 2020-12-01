import React from 'react';
import './AboutStyles.css';
import AboutItem from './AboutItem';

const About = () => {
     return (
          <div className='about-container'>
               <AboutItem />
               <AboutItem />
          </div>
     );
}

export default About;
