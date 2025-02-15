import React from 'react';
import ProjectBox from './ProjectBox';
import TripPlannerImage from '../images/tripplanner.png';
import ECommerceImage from '../images/e-commerce.png';
import DoctorAppImage from '../images/doctor.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TripPlannerImage} projectName="TripPlanner" />
        <ProjectBox projectPhoto={ECommerceImage} projectName="ECommerce" />
        <ProjectBox projectPhoto={DoctorAppImage} projectName="DoctorApp" />
      </div>
    </div>
  );
}
export default Projects;