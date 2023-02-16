import React from 'react'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { OrbitControls } from '@react-three/drei';

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./furniture1.glb");
    return (
      <>
        <primitive object={gltf.scene} scale={0.04} position={[0, -1, 1]}/>
      </>
    );
  };
  

function Furniture1() {
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

export default Furniture1