import React from 'react';
import './ServicesStyles.css';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className='service-card'>
      <img
        // src='https://images.unsplash.com/photo-1573495803898-b6752f1d326e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'
        src={image}
        alt=''
      />
      <h3 className='service-card-heading'>{title}</h3>
      <p className='service-container-para'>{description}</p>
    </div>
  );
};

export default ServiceCard;
