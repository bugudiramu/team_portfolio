import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';
import every from '../../assets/every.png';
import quiz from '../../assets/quiz.jpg';
import vendor from '../../assets/vendor.jpg';
import delievery from '../../assets/delievery.jpg';
import indifood from '../../assets/indifood.png';
import admin from '../../assets/admin.png';

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <div className='each-item'>
        <ProjectItem image={every} title='EVERY' type='App' />
      </div>
      <div className='each-item'>
        <ProjectItem image={quiz} title='QUIZ SYSTEM' type='Web' />
      </div>
      <div className='each-item'>
        <ProjectItem image={vendor} title='VENDOR (EVERY)' type='App' />
      </div>
      <div className='each-item'>
        <ProjectItem image={delievery} title='DELIEVERY (EVERY)' type='App' />
      </div>
      <div className='each-item'>
        <ProjectItem image={indifood} title='INDIFOOD' type='Web' />
      </div>
      <div className='each-item'>
        <ProjectItem image={admin} title='ADMIN (EVERY)' type='Web' />
      </div>
    </div>
  );
};

export default Projects;
