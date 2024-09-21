import { useTexture } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import img from "../public/digix.jpg";
import { useFrame } from "@react-three/fiber";
const Cyl = () => {
  let tex = useTexture(img);
  tex.needsUpdate = true;
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta; // rotate the cylinder
  });
  return (
    <group rotation={[0, 1.5, 0.5]}>
    <mesh ref={cyl}>
      <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
      <meshStandardMaterial color="#ffffff" map={tex} side={THREE.DoubleSide} />
    </mesh>
  </group>
  );
};

export default Cyl;
