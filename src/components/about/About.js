import React from 'react';
import './AboutStyles.css';
import AboutItem from './AboutItem';
import kk from './../../assets/kk.jpg';
import ramu from './../../assets/ramu.jpg';

let socialLinks = {
  r: {
    github: 'https://github.com/bugudiramu',
    linkedIn: 'https://www.linkedin.com/in/ramu-b-2a5a5a161/',
    twitter: 'https://twitter.com/_iamramu',
    instagram: 'https://www.instagram.com/iamramu04/',
  },
  kalyan: {
    github: 'https://github.com/kkkumarkanike',
    linkedIn: 'https://www.linkedin.com/in/kalyan-kumar-kanike-59086b145',
    twitter: 'https://twitter.com/kalyank27680266',
    instagram: 'https://www.instagram.com/kanikekalyankumar/',
  },
};

const { r, kalyan } = socialLinks;

const About = () => {
  return (
    <div className='about-container' id='about'>
      <AboutItem
        image={ramu}
        name='Ramu B'
        designation='FullStack Web/Mobile Developer'
        github_url={r.github}
        linkedIn_url={r.linkedIn}
        twitter_url={r.twitter}
        instagram_url={r.instagram}
      />
      <AboutItem
        image={kk}
        name='Kalyan Kumar K'
        designation='FullStack Web/Mobile Developer'
        github_url={kalyan.github}
        linkedIn_url={kalyan.linkedIn}
        twitter_url={kalyan.twitter}
        instagram_url={kalyan.instagram}
      />
    </div>
  );
};

export default About;
