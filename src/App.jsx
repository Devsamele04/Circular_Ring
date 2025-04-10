import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <>
      <div className="absolute uppercase left-[37%] top-[3%]">
        <h1 className=" text-white text-4xl text-center font-bold">
          Welcome to my Page.
        </h1>
      </div>
      <Canvas flat camera={{ fov: 30 }}>
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={12.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
