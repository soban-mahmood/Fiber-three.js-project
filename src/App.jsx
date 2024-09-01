import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Cyl from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";
const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cyl />
      <EffectComposer>
        <Bloom
          intensity={0} // The bloom intensity.
          luminanceThreshold={0.4} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.2} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
  );
};

export default App;
