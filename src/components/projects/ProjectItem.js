import React from 'react';
import './Projects.css';

const ProjectItem = ({ image, title, type }) => {
  return (
    <div>
      <div className='container'>
        <img src={image} alt='Project' className='image' />
        <div className='overlay'>
          <div className='text'>{title}</div>
          <div className='subtext'>{type}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
