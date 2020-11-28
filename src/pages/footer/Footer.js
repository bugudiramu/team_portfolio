import React from 'react';
import './FooterStyles.css';
import CustomPinkButton from '../../components/button/CustomPinkButton';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <div className='footer-flex-1'>
          <h3>About Mine</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            consequatur, deserunt a suscipit unde autem? Iure, dignissimos
            debitis? Similique vitae possimus exercitationem sit magnam incidunt
            fugiat unde a officiis omnis.
          </p>
          <p>&copy; 2019 Leedo HTML5 Template. All rights reserved.</p>
        </div>
        <div className='footer-flex-2'>
          <h3>Quick Links</h3>
          <div className='footer-flex-2-flex'>
            <div style={{ marginRight: '4rem' }}>
              <p id='footer-links'>Home</p>
              <p id='footer-links'>About Us</p>
              <p id='footer-links'>Our Services</p>
              <p id='footer-links'>Projects</p>
            </div>
            <div>
              <p id='footer-links'>News </p>
              <p id='footer-links'>Contact Us</p>
              <p id='footer-links'>Shop</p>
            </div>
          </div>
        </div>
        <div className='footer-flex-3'>
          <h3>Subscribe</h3>
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
                //   padding: '15px 30px',
                //   border: 'none',
                //   marginRight: ' 1.5rem',
                //   width: '70%',
                //   backgroundColor: '#555 ',
                //   color: 'white',
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
  );
};

export default Footer;
