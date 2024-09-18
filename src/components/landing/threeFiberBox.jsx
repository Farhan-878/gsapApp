import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Cylinderic from "./cylinderic";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const ThreeFiberBox = () => {
  return (
    <div className="Animated-box-content">
      <Canvas flat camera={{ fov: 20 }}>
        <OrbitControls />
        <ambientLight />
        <Cylinderic />
        <EffectComposer>
          <Bloom
            mipmapBlur={true}
            intensity={1.0}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.025}
          />
          <ToneMapping adaptive={true} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ThreeFiberBox;
