import React, { useState } from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    document.querySelector('.mobileMenu').classList.remove('close');
    document.querySelector('.mobileMenu').classList.add('open');
    setIsOpen(true);
  };
  const closeNav = () => {
    setIsOpen(false);
    document.querySelector('.mobileMenu').classList.remove('open');
    document.querySelector('.mobileMenu').classList.add('close');
  };
  return (
    <div>
      <div className='navigation_container'>
        <div className='menu'>
          {!isOpen ? (
            <div onClick={openNav} style={{ width: '20px' }}>
              <FontAwesomeIcon icon={faBars} style={{ fontSize: 20 }} />
            </div>
          ) : (
            <div style={{ width: '20px' }}>
              <FontAwesomeIcon
                icon={faTimes}
                style={{ fontSize: 20 }}
                onClick={closeNav}
              />
            </div>
          )}
          {/* <h3 className='brand_head'>HI</h3> */}
        </div>
        <div className='branding'>
          <h3 className='brand_head'>
            <a href='#home'>Web-Ninjas</a>
          </h3>
        </div>
        <div className='options'>
          <ul>
            <li className='each_navitem'>
              <a href='#services'>SERVICES</a>
            </li>
            <li className='each_navitem'>
              <a href='#about'>ABOUT</a>
            </li>
            <li className='each_navitem'>
              <a href='#projects'>PORTFOLIO</a>
            </li>
            <li className='each_navitem'>
              <a href='#contact'>CONTACT US</a>{' '}
            </li>
          </ul>
        </div>
      </div>
      <div className='mobileMenu close'>
        <div className='eachMobileItem'>
          <div>
            <p style={{ fontSize: '13px' }}>HOME</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 13 }} />
          </div>
        </div>
        <div
          style={{
            padding: '0.5px',
            backgroundColor: '#f2f2f2',
            width: '100%',
          }}
        ></div>
        <div className='eachMobileItem'>
          <div>
            <p style={{ fontSize: '13px' }}>ABOUT</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 13 }} />
          </div>
        </div>
        <div
          style={{
            padding: '0.5px',
            backgroundColor: '#f2f2f2',
            width: '100%',
          }}
        ></div>
        <div className='eachMobileItem'>
          <div>
            <p style={{ fontSize: '13px' }}>PORTFOLIO</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 13 }} />
          </div>
        </div>
        <div
          style={{
            padding: '0.5px',
            backgroundColor: '#f2f2f2',
            width: '100%',
          }}
        ></div>
        <div className='eachMobileItem'>
          <div>
            <p style={{ fontSize: '13px' }}>CONTACT US</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 13 }} />
          </div>
        </div>
        <div
          style={{
            padding: '0.5px',
            backgroundColor: '#f2f2f2',
            width: '100%',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Navigation;
