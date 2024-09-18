import React from "react";
import arrow from "../../assets/arrow-br.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TextScrolling = () => {
  const RecallItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useGSAP(() => {
    gsap.to(".text-scroll-title", {
      transform: "translateX(-100%)",
      ease: "none",
      scrollTrigger: {
        trigger: ".text-scroll-content",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="text-scroll-content">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            {RecallItem.map((index) => (
              <div
                className="text-scroll-title d-flex align-items-center justify-content-center "
                key={index}
              >
                <h1>Developer</h1>
                <img src={arrow} alt="arrow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextScrolling;
