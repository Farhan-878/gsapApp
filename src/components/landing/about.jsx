import React from "react";
import aboutpic from "../../assets/about.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  useGSAP(() => {
    gsap.to(".about-content h1", {
      opacity: 1,
      transform: "translateY(150%)",
      scale: 0.8,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
      },
    });
    gsap.to(".about-img", {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      scale: 0.6,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
      },
    });
    gsap.from(".about-content h2, .about-content p", {
      opacity: 1,
      y: 100,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
      },
    });
  });

  return (
    <div className="about-content pt-5 pb-5">
      <div className="container">
        <div className="about-content-container d-grid gap-5">
          <div className="about-title text-center text-black">
            <h1>ABOUT ME</h1>
          </div>
          <img className="about-img" src={aboutpic} alt="about" />
          <h2>We Creating A GSAP Portfolio for Beginners</h2>

          <p>
            I'm a frontend developer who specializes in React and JavaScript. I
            enjoy creating websites and web applications. I'm passionate about
            creating beautiful and intuitive user experiences. I'm always
            looking for new ways to improve my skills. I'm excited to use my
            skills to help others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
