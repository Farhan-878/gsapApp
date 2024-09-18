import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedBox from "./featuredBox";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeaturedWork = () => {
  useGSAP(() => {
    gsap.from(".feature-content h2", {
      x: -100,
      duration: 1,
      stagger: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".feature-content",
        start: "top 75%",
        end: "bottom 25%",
        scrub: 1,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".feature-content p", {
      x: 100,
      duration: 1,
      stagger: 0.3,
      opacity: 0,
      scrollTrigger: {
        trigger: ".feature-content",
        start: "top 75%", // Start animation when element is 75% visible in the viewport
        end: "bottom 25%", // Continue animation until element is 25% visible
        scrub: 1, // Smooth scrolling effect
        markers: false, // Hide markers in production
        toggleActions: "play none none reverse", // Reverse animation on scroll up
      },
    });
  });

  return (
    <div className="banner-content feature-content pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-white">
            <h2>FEATURED WORK</h2>
          </div>
          <div className="col-md-6 text-white">
            <p>
              My creative spirit comes alive in the digital realm. With nimble
              fingers flying across the keyboard, I craft clear experiences out
              of nothing but ones and zeroes.
            </p>
          </div>
          <FeaturedBox />
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
