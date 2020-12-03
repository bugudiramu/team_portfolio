import React from 'react';
import './Hero.css';
import banner from './../../assets/banner.jpg';
import Navigation from '../navigation/Navigation';
import CustomPinkButton from './../button/CustomPinkButton';
import CustomCyanButton from '../button/CustomCyanButton';

const Hero = () => {
  return (
    <div id='home' className='hero-image'>
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
        <p
          style={{
            color: '#10ac84',
            display: 'inline',
            fontWeight: 'bolder',
            textShadow: '0px 0px 60px #10ac84',
          }}
          className='hero-text'
        >
          awesome digital
        </p>
        <p className='hero-text'>products.</p>
        <div className='hero-button-group'>
          <div className='hero-each-button'>
            <a href='#contact'>
              <CustomPinkButton text='SEND MESSAGE' />
            </a>
          </div>
          <div className='hero-each-button'>
            <a href='#projects'>
              <CustomCyanButton text='VIEW PROJECTS' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
