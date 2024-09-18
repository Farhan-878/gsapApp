import React, { useEffect } from "react";
import design from "../../assets/about-2.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ImageViewer = () => {
  useEffect(() => {
    gsap.to(".image-content .image-viewer", {
      width: "200%",
      scrollTrigger: {
        trigger: ".image-content",
        start: "top center",
        end: "bottom center",
        scrub: 2,
        markers: false,
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div className="image-content h-[100vh]">
      <div className="col-md-12 ">
        <img
          className="image-viewer"
          id="image-cursor"
          src={design}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
