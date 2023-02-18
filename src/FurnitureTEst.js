import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function FurnitureTest() {
  const mountRef = useRef(null);

  useEffect(() => {
    var scene = new THREE.Scene();

    // Camera
    var camera = new THREE.PerspectiveCamera(25, 1, 1, 10000);
    camera.position.set(50, 20, 50);

    // Renderer
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor("black", 0); // Default 0x000000, 0
    renderer.setSize(330, 330);
    mountRef.current.appendChild(renderer.domElement);

    // Light
    var light = new THREE.AmbientLight(0x404040);
    scene.add(light);

    var directionalLight = new THREE.DirectionalLight("white", 1.2);
    directionalLight.position.set(20, 40, 50);
    scene.add(directionalLight);

    const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
    scene.add(helper);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load("/furniture3.glb", (gltf) => {
      // called when the resource is loaded
      var object = gltf.scene;
      gltf.scene.scale.set(1, 1, 1); // Scale the object
      gltf.scene.position.x = 0; //Position (x = right+ left-)
      gltf.scene.position.y = -12; //Position (y = up+, down-)
      gltf.scene.position.z = 0; //Position (z = front +, back-)
      scene.add(gltf.scene);
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);

      // required if controls.enableDamping or controls.autoRotate are set to true
      controls.update();

      renderer.render(scene, camera);
    }

    animate();

    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef}></div>;
}

export default FurnitureTest;
