import React from 'react';
import './ServicesStyles.css';

const ServiceCard = () => {
  return (
    <div className='service-card'>
      <img
        src='https://images.unsplash.com/photo-1573495803898-b6752f1d326e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'
        alt=''
      />
      <h3>Web Development</h3>
      <p className='service-container-para'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        vitae adipisci perferendis eius ullam autem.
      </p>
    </div>
  );
};

export default ServiceCard;
