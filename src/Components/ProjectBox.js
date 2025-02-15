import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TripPlannerDesc: "A travel planning web app that helps users plan and organize trips efficiently. It includes itinerary management, budget tracking, and collaborative planning features.",
    TripPlannerGithub: "https://github.com/DineshKarthikRajanD/TripPlanner",
    TripPlannerWebsite: "https://travellplanner.netlify.app/",

    ECommerceDesc: "A feature-rich E-commerce platform that enables users to browse products, add them to a cart, and securely complete transactions. Integrated with payment gateways and an admin dashboard.",
    ECommerceGithub: "https://github.com/ElankumaranR/ecomerce",
    

    DoctorAppDesc: "An online doctor appointment system allowing patients to book consultations, receive prescriptions, and manage health records. Includes an admin panel for doctors.",
    DoctorAppGithub: "https://github.com/ElankumaranR/Doctor_Appointment",
    
  };

  let show = desc[projectName + 'Github'] ? "inline-block" : "none";

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt={`${projectName} Display`} />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: show }} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a href={desc[projectName + 'Website']} target='_blank' rel="noopener noreferrer">
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
