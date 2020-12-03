import React from 'react';
import './AboutStyles.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const AboutItem = (props) => {
  const {
    name,
    designation,
    image,
    github_url,
    linkedIn_url,
    twitter_url,
    instagram_url,
  } = props;
  return (
    <div className='about-item-container'>
      <a href={linkedIn_url}>
        <img src={image} alt='' className='about-image' />
      </a>
      <h4 style={{ marginTop: '0.8rem', color: '#3F3D56', fontSize: '24px' }}>
        {name}
      </h4>
      <p style={{ fontSize: 13, color: 'gray', margin: '0.5rem 0' }}>
        {designation}
      </p>
      <div className='social-icons'>
        <a href={github_url}>
          <FaGithub />
        </a>
        <a href={linkedIn_url}>
          <FaLinkedin />
        </a>
        <a href={twitter_url}>
          <FaTwitter />
        </a>
        <a href={instagram_url}>
          {' '}
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default AboutItem;
