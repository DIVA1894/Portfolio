import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Divakar Arunagiri</b>, and I am from Tamil Nadu, India.
            I'm a <b>pre-final year student</b> at <b>Kongu Engineering College</b>, pursuing <b>B.E in Computer Science and Engineering</b>. <br /><br />
            I have a strong passion for <b>database management</b> and <b>problem-solving</b> on competitive platforms. 
            My hobbies include playing <b>badminton</b> and <b>chess</b>, and I enjoy listening to music in my free time. <br /><br />
            I am always eager to explore new technologies and work on exciting projects. 
            Apart from coding, I love learning about new advancements in tech and continuously improving my skills.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDB' />
        <Skills skill='MySQL' />
        <Skills skill='PostgreSQL' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='JavaScript' />
        <Skills skill='Postman' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
      </div>
    </>
  );
};

export default About;
