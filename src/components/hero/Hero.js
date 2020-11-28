import React from 'react';
import './Hero.css';
import banner from './../../assets/banner.jpg';
import Navigation from '../navigation/Navigation';

const Hero = () => {
     return (
          <div className='hero-image'>
               <div style={{ justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative', top: '30%' }}>
                    <p className='hero-text'>We create  products</p>
                    <p className='hero-text'>digital branding</p>
                    <p className='hero-text'>products.</p>
               </div>
          </div>
     )
}

export default Hero;