import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const LineofGitar = () => {
  const lineOfGuitarRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const lineOfGuitarElement = lineOfGuitarRef.current;

    let path = `M 10 100 Q 600 100 1200 100`;

    const handleMouseMove = (e) => {
      // Update the path based on mouse position
      path = `M 10 100 Q ${e.x} ${e.y} 1200 100`;
      // console.log(e.y);

      // Animate the SVG path with GSAP
      gsap.to(pathRef.current, {
        duration: 0.5,
        ease: "power1.out",
        attr: { d: path },
      });
    };

    const handleMouseLeave = () => {
      const finalPath = `M 10 100 Q 600 100 1200 100`;

      // Reset the path on mouse leave
      gsap.to(pathRef.current, {
        duration: 1.8,
        ease: "elastic.out(1, 0.1)",
        attr: { d: finalPath },
      });
    };

    // Add event listeners
    lineOfGuitarElement.addEventListener("mousemove", handleMouseMove);
    lineOfGuitarElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup the event listeners when component unmounts
    return () => {
      lineOfGuitarElement.removeEventListener("mousemove", handleMouseMove);
      lineOfGuitarElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="lineofgitar" id="lineofgitar-section" ref={lineOfGuitarRef}>
      <svg width="1200" height="200">
        <path
          ref={pathRef}
          d="M 10 100 Q 600 100 1200 100"
          stroke="#000"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default LineofGitar;
