import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesStyles.css';

const Services = () => {
  return (
    <div className='service-container'>
      <h1
        style={{
          padding: '2rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          lineHeight: 1.3,
        }}
      >
        We <span className='highlight-word'>design</span> &{' '}
        <span className='highlight-word'>development</span> team <br /> that is
        proud of our work.
      </h1>
      <p className='service-container-para' style={{ paddingBottom: '2rem' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
        maxime, quod labore corporis, reiciendis esse officiis maiores sint
        quibusdam laborum!
      </p>
      {/* Service card */}
      <div className='service-card-container'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
