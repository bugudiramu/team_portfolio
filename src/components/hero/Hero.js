import React from 'react';
import './Hero.css';
import banner from './../../assets/banner.jpg';
import Navigation from '../navigation/Navigation';
import CustomPinkButton from './../button/CustomPinkButton';
import CustomCyanButton from '../button/CustomCyanButton';

const Hero = () => {
  return (
    <div className='hero-image'>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          position: 'relative',
          top: '30%',
        }}
      >
        <p className='hero-text'>we create</p>
        <p className='hero-text'>digital branding</p>
        <p className='hero-text'>products.</p>
        <div className='hero-button-group'>
          <div className='hero-each-button'>
            <CustomPinkButton text='SEND MESSAGE' />
          </div>
          <div className='hero-each-button'>
            <CustomCyanButton text='VIEW PROJECTS' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
