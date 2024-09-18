import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cylinderic from "./cylinderic";

const ThreeFiberBox = () => {
  return (
    <div className="Animated-box-content">
      <Canvas camera={{ fov: 20 }}>
        <OrbitControls />
        <ambientLight />
        <Cylinderic />
      </Canvas>
    </div>
  );
};

export default ThreeFiberBox;
