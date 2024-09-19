import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaNpm,
  FaDocker,
  FaAws,
  FaSass,
} from "react-icons/fa";
import {
  TbBrandThreejs,
  TbBrandVite,
  TbBrandNextjs,
  TbBrandTailwind,
} from "react-icons/tb";
import "./style.css";

const iconData = [
  { component: FaReact, left: "30%", top: "20%" },
  { component: FaHtml5, left: "40%", top: "50%" },
  { component: FaCss3, left: "20%", top: "30%" },
  { component: FaJs, left: "60%", top: "40%" },
  { component: FaNodeJs, left: "50%", top: "70%" },
  { component: FaGit, left: "10%", top: "10%" },
  { component: FaGithub, left: "80%", top: "60%" },
  { component: FaNpm, left: "70%", top: "80%" },
  { component: FaDocker, left: "15%", top: "60%" },
  { component: FaAws, left: "85%", top: "15%" },
  { component: FaSass, left: "25%", top: "75%" },
  { component: TbBrandThreejs, left: "35%", top: "10%" },
  { component: TbBrandVite, left: "45%", top: "80%" },
  { component: TbBrandNextjs, left: "65%", top: "30%" },
  { component: TbBrandTailwind, left: "55%", top: "50%" },
];

const BackgroundAnimate = ({ fill }) => {
  return (
    <div className="bg-component-wrapper">
      <div className="left">
        {iconData.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <div
              key={index}
              className="icon-wrapper"
              style={{ left: icon.left, top: icon.top }}
            >
              <IconComponent fill={fill} size={24} className="bg-components" />
            </div>
          );
        })}
      </div>
      <div className="right">
        {iconData.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <div
              key={index}
              className="icon-wrapper"
              style={{ left: icon.left, top: icon.top }}
            >
              <IconComponent fill={fill} size={24} className="bg-components" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundAnimate;
