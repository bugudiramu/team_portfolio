import React from 'react';
import './Projects.css';
import avatar from './../../assets/avatar.jpg';

const ProjectItem = () => {
  return (
    <div>
      <div className='container'>
        <img
          src='https://images.unsplash.com/photo-1602312588630-7801386f162d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'
          alt='Avatar'
          className='image'
        />
        <div className='overlay'>
          <div className='text'>Hello World</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
