import { useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import cyl from "../../assets/cylinderic.png";
// import { useFrame } from "@react-three/fiber";

const Cylinderic = () => {
  let cylendricImage = useTexture(cyl);
  // let cylImage = useRef(null);

  // useFrame(() => {
  //   cylImage.current.rotation.x += 0.01;
  //   cylImage.current.rotation.y += 0.01;
  // });

  // console.log("rotate>>>", cylImage.current.rotation.x);

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshBasicMaterial map={cylendricImage} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cylinderic;
