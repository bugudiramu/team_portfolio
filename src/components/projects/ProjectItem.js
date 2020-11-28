import React from 'react';
import './Projects.css';
import avatar from './../../assets/avatar.jpg';


const ProjectItem = () => {
     return (
          <div>
               <div className="container">
                    <img src={avatar} alt="Avatar" className="image" />
                    <div className="overlay">
                         <div className="text">Hello World</div>
                    </div>
               </div>
          </div>
     )
}

export default ProjectItem;