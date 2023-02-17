import React from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Center, OrbitControls } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./furniture1.glb");
  // const ref = useRef();
  // useFrame(() => (ref.current.rotation.y -= 0.005));

  return (
    <>
      <primitive object={gltf.scene} scale={0.25} />
    </>
  );
};

function Furniture2() {
  return (
    <Canvas camera={{ position: [30, 10, 20], fov: 65 }}>
      <Center>
        <ambientLight intensity={0.5} />
        <pointLight position={[20, 20, 10]} />
        <pointLight position={[-20, -20, 10]} />
        <OrbitControls />
        <Model />
      </Center>
    </Canvas>
  );
}

export default Furniture2;
