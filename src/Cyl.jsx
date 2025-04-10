import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Cyl = () => {
  
  let tex = useTexture("/ribn.png");
  let Cyl = useRef(null);
  useFrame((state, deleta) => {
    Cyl.current.rotation.y += deleta;
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={Cyl}>
        <cylinderGeometry args={[1, 1, 1, 40, 40, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
  
};

export default Cyl;
