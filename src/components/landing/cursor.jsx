import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    // Attach the event listener to the window to capture mouse movements across the whole document
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="cursor" ref={cursorRef} id="cursor" />
    </div>
  );
};

export default Cursor;
