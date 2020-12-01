import React from 'react';
import './AboutStyles.css';
import kk from './../../assets/kk.jpg';

const AboutItem = () => {
     return (
          <div className='about-item-container'>
               <img src={kk} alt="" className='about-image' />
               <h4 style={{ marginTop: '0.8rem' }}>Kalyan Kumar Kanike</h4>
               <p style={{ fontSize: 13, color: 'gray', margin: '0.5rem 0' }}>FullStack Developer</p>
               <div>

               </div>
          </div>
     );
}

export default AboutItem;
