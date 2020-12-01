import React from 'react';
import './FooterStyles.css';
import CustomPinkButton from '../../components/button/CustomPinkButton';

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-sub-container'>
          <div className='footer-flex-1'>
            <h3 className='footer-flex-1-h3'>About Us</h3>
            <p className='footer-flex-1-para'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              consequatur, deserunt a suscipit unde autem? Iure, dignissimos
              debitis? Similique vitae possimus exercitationem sit magnam
              incidunt fugiat unde a officiis omnis.
            </p>
          </div>
          <div className='footer-flex-2'>
            <h3 className='footer-flex-1-h3'>Quick Links</h3>
            <div className='footer-flex-2-flex'>
              <div style={{ marginRight: '4rem' }}>
                <p id='footer-links'>
                  <a href='#'>Home</a>{' '}
                </p>
                <p id='footer-links'>
                  <a href='#'>About Us</a>{' '}
                </p>
                <p id='footer-links'>
                  <a href='#'>Our Services</a>{' '}
                </p>
                <p id='footer-links'>
                  <a href='#'>Projects</a>{' '}
                </p>
              </div>
              <div>
                <p id='footer-links'>
                  <a href='#'>Trending</a>{' '}
                </p>
                <p id='footer-links'>
                  <a href='#'>Contact Us</a>{' '}
                </p>
                <p id='footer-links'>
                  <a href='#'>Blog</a>{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='footer-flex-3'>
            <h3 className='footer-flex-1-h3'>Subscribe</h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <input
                type='text'
                placeholder='Your Email'
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '1.65',
                  display: 'block',
                  width: '80%',
                  margin: '0',
                  padding: '15px 30px',
                  letterSpacing: '0',
                  textTransform: 'none',
                  color: 'white',
                  borderRadius: '0',
                  border: 'none',
                  outline: '0',
                  backgroundColor: '#414141',
                  boxShadow: 'none',
                  appearance: ' none',
                  marginRight: '0.5rem',
                }}
              />
              <CustomPinkButton text='OK' />
            </div>
          </div>
        </div>
      </div>
      <p className='footer-flex-1-copyright'>
        &copy; 2019 Leedo HTML5 Template. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
