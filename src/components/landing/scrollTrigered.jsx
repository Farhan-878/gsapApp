import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollTrigered = () => {
  useEffect(() => {
    gsap.to(".scroller-content .scroller-title", {
      transform: "translateX(-100%)",
      ease: "none",
      scrollTrigger: {
        trigger: ".scroller-content",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="scroller-content">
      <div className="container">
        <h1 className="scroller-title text-black">Frontend developer</h1>
      </div>
    </div>
  );
};

export default ScrollTrigered;
