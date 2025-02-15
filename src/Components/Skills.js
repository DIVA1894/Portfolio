import React from 'react';
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiJavascript1, DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiNpm, SiMysql, SiPostgresql } from "react-icons/si";


const skillIcons = {
  'React': <FaReact />,
  'JavaScript': <DiJavascript1 />,
  'Node': <DiNodejs />,
  'Express': <SiExpress />,
  'MongoDB': <SiMongodb />,
  'MySQL': <SiMysql />,
  'PostgreSQL': <SiPostgresql />,
  'Git': <FaGitAlt />,
  'Github': <FaGithub />,
  'Npm': <SiNpm />,
  'Vercel': <SiVercel />,
  'Postman': <SiPostman />,
};

const Skills = ({ skill }) => {
  return (
    <div className="SkillBox">
      {skillIcons[skill] || "❓"}
    </div>
  );
};

export default Skills;
