import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>DIVAKAR ARUNAGIRI</b></h1>
          <Typed />
          {/* Social Media Icons */}
          <div className="socialIcons">
            <a href="https://github.com/DevanshSahni" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/devansh-sahni/" target='_blank'><FaLinkedin /></a>
            <a href='mailTo:devanshsahni@gmail.com' target='_blank'><GrMail /></a>
            <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode /></a>
          </div>
        </div>
        

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />

      </div>
    </div>
  );
}

export default Home;
