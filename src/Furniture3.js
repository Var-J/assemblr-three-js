import React from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./furniture3.glb");
    return (
      <>
        <primitive object={gltf.scene} scale={5} position={[0, -2, 1]}/>
      </>
    );
  };
  

function Furniture3() {
  return (
    <Canvas>
      <pointLight position={[0, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
    </Canvas>
  )
}

export default Furniture3