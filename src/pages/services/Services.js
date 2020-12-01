import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesStyles.css';
import web from '../../assets/web.png';
import app from '../../assets/app.png';
import design from '../../assets/design.png';

const Services = () => {
  return (
    <div id='services' className='service-container'>
      <h1 className='highlight-word-container'>
        <span className='highlight-word'>We are</span>{' '}
        <span style={{ color: '#00bec5' }} className='highlight-word'>
          design & development
        </span>
        <br />
        <span className='highlight-word'> team that is proud of</span>
        <br />
        <span className='highlight-word'>our work.</span>
      </h1>
      <p
        className='service-container-paragraph'
        style={{ paddingBottom: '2rem' }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
        maxime, quod labore corporis, reiciendis esse officiis maiores sint
        quibusdam laborum!
      </p>
      <br />
      {/* Service card */}
      <div className='service-card-container'>
        <ServiceCard
          image={web}
          title='web development'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cupiditate explicabo pariatur perspiciatis? Maiores, similique!'
        />
        <ServiceCard
          image={app}
          title='app development'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cupiditate explicabo pariatur perspiciatis? Maiores, similique!'
        />
        <ServiceCard
          image={design}
          title='ui/ux design'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cupiditate explicabo pariatur perspiciatis? Maiores, similique!'
        />
      </div>
    </div>
  );
};

export default Services;
