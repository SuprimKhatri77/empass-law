"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x111111);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 2, 8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Controls for zoom & orbit
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // smooth motion
    controls.dampingFactor = 0.05;
    controls.enablePan = false; // disable panning if you want
    controls.minDistance = 2; // min zoom
    controls.maxDistance = 10; // max zoom

    //Restric vertical orbit
    controls.minPolarAngle = 0; //look straight from top
    controls.maxPolarAngle = Math.PI / 2; //cannot go below horizon

    // Load GLB model
    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      "/london.glb",
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
      },
      undefined,
      (error) => console.error("Error loading GLB:", error)
    );

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // slow rotation
      if (model) model.rotation.y += 0.00002;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default ThreeScene;