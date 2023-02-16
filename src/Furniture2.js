import React from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./furniture2.glb");
    return (
      <>
        <primitive object={gltf.scene} scale={10} position={[0, -2, 0]}/>
      </>
    );
  };
  

function Furniture2() {
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

export default Furniture2