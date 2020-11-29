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
        <span className='highlight-word' >We are</span> <span style={{ color: '#00bec5' }}>design &{' '}development</span>
        <br /><span className='highlight-word'> team that is proud of</span><br />
        <span className='highlight-word' >our work.</span>
      </h1>
      <p className='service-container-paragraph' style={{ paddingBottom: '2rem' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
        maxime, quod labore corporis, reiciendis esse officiis maiores sint
        quibusdam laborum!
      </p>
      <br />
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
