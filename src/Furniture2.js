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
    camera.position.set(50, 20, 20);

    // Renderer
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor("black", 0); // Default 0x000000, 0
    if (window.innerWidth > 1024) {
      renderer.setSize(330, 330);
    } else {
      renderer.setSize(240, 330);
    }
    mountRef.current.appendChild(renderer.domElement);

    // Light
    const light = new THREE.AmbientLight(0x404040, 15); // soft white light
    scene.add(light);

    var directionalLight = new THREE.DirectionalLight("white", 0.6);
    directionalLight.position.set(0, 100, 0);
    scene.add(directionalLight);

    var directionalLight2 = new THREE.DirectionalLight("white", 0.6);
    directionalLight2.position.set(0, -100, 0);
    scene.add(directionalLight2);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load("/furniture2.glb", (gltf) => {
      // called when the resource is loaded
      var object = gltf.scene;
      object.scale.set(30, 30, 30); // Scale the object
      object.position.x = 0; //Position (x = right+ left-)
      object.position.y = -10; //Position (y = up+, down-)
      object.position.z = 0; //Position (z = front +, back-)
      scene.add(object);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false
    controls.enableDamping = true
    

    function animate() {
      requestAnimationFrame(animate);

      // required if controls.enableDamping or controls.autoRotate are set to true
      controls.update();

      renderer.render(scene, camera);
    }

    animate();

    var test= mountRef.current
    return () => test.removeChild(renderer.domElement);
  }, []);

  return <div ref={mountRef}></div>;
}

export default FurnitureTest;
