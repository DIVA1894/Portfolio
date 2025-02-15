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
            <a href="hhttps://github.com/DIVA1894" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/divakar-a-a4256b259/" target='_blank'><FaLinkedin /></a>
            <a href='mailTo:diva180904@gmail.com' target='_blank'><GrMail /></a>
            <a href="https://leetcode.com/u/22CSR051_diva/" target="_blank"><SiLeetcode /></a>
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
