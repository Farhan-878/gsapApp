import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const h1Ref = useRef(null);
  const [characters, setCharacters] = useState([]);

  useGSAP(() => {
    const text = "Services";
    setCharacters(text.split(""));

    gsap.from(h1Ref.current.children, {
      duration: 0.8,
      delay: 0.5,
      stagger: 0.15,
      y: 70,
      opacity: 0,
      scrollTrigger: {
        trigger: h1Ref.current,
        start: "top center",
        end: "bottom center",
        markers: false,
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });
    gsap.from(".service-text p", {
      duration: 0.8,
      delay: 0.5,
      opacity: 0.3,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".service-text",
        start: "top center",
        end: "bottom center",
        markers: false,
        toggleActions: "play none none reverse",
        scrub: 2,
      },
    });
  });

  return (
    <div className="services-content pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="service-title d-flex align-content-center justify-content-center">
              <h1 ref={h1Ref}>
                {characters.map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </h1>
            </div>
            <div className="service-text d-flex align-items-center justify-content-center flex-column pt-3 pb-3">
              <p>WebDesigning</p>
              <p>Web Development</p>
              <p>Mobile App Development</p>
              <p>UI/UX Designing</p>
              <p>Digital Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
