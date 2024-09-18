import React, { useEffect } from "react";
import banner from "../../assets/cube.svg";
import "./style.css";
import gsap from "gsap";

const Banner = () => {
  useEffect(() => {
    // gsap.fromTo(
    //   ".banner-title",
    //   {
    //     opacity: 0,
    //     duration: 1,
    //     scale: 0.5,
    //     ease: "elastic.out(0.5, 0.5)",
    //   },
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     ease: "elastic.out(0.5, 0.5)",
    //     delay: 3.5,
    //   }
    // );
    gsap.fromTo(
      ".banner-img",
      {
        transform: "translateX(100%)",
        opacity: 0,
        duration: 1,
        scale: 0.2,
      },
      {
        transform: "translateX(0)",
        duration: 1.5,
        opacity: 1,
        scale: 1,
        delay: 3.5,
      }
    );
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
      delay: 3.5,
    });

    // Apply staggered animation using timeline
    tl.fromTo(
      ".intro-text p",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2 }
    )
      .fromTo(
        ".intro-text h1",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.5" // Overlap the animation timing
      )
      .fromTo(
        ".intro-text .adjust",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      // Apply the same stagger effect for the banner title
      .fromTo(
        ".banner-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.5" // Overlap the timing slightly to match the intro-text animation
      );
  });
  return (
    <div className="banner-content h-[100vh]">
      <div className="container">
        <div className="row">
          <div className="col-md-6 flex align-content-center">
            <div className="intro-text">
              <p>Hello, I’m</p>
              <h1>Farhan</h1>
              <div className="adjust">FRONT-END SOFTWARE ENGINEER</div>
            </div>
            <h1 className="banner-title text-white  text-uppercase">
              We Creating A GSAP Portfolio for Beginners
            </h1>
          </div>
          <div className="col-md-6">
            <img
              className="banner-img"
              id="image-cursor"
              src={banner}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
