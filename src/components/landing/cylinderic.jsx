import { useTexture } from "@react-three/drei";
import React, { useRef } from "react"; // Ensure useRef is imported
import * as THREE from "three";
import cyl from "../../assets/cylthreejs.jpg";
import { useFrame } from "@react-three/fiber";

const Cylinderic = () => {
  let cylendricImage = useTexture(cyl);
  let cylImage = useRef(); // No need to initialize with null

  useFrame((state, delta) => {
    if (cylImage.current) {
      cylImage.current.rotation.y += delta; // Ensure cylImage.current is not null
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cylImage}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshBasicMaterial map={cylendricImage} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cylinderic;
