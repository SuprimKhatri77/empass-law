"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

export default function LegalHologram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number>(0);
  const [currentObject, setCurrentObject] = useState(0);
  const [objectName, setObjectName] = useState("SCALES OF JUSTICE");

  const objectNames = ["SCALES OF JUSTICE", "GAVEL", "LAW BOOK"];

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    const updateSize = () => {
      const container = containerRef.current;
      if (!container) return;
      const size = Math.min(container.clientWidth, container.clientHeight, 600);
      renderer.setSize(size, size);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    updateSize();
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xc9a227, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Material for dotted lines
    const dottedMaterial = new THREE.PointsMaterial({
      color: 0xf5f0e6,
      size: 0.05,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });

    const glowMaterial = new THREE.PointsMaterial({
      color: 0xc9a227,
      size: 0.08,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    // Create Scales of Justice
    const createScales = () => {
      const group = new THREE.Group();
      const points: THREE.Vector3[] = [];

      // Base pedestal
      for (let i = 0; i <= 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 0.8;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radius,
            -2.5,
            Math.sin(angle) * radius,
          ),
        );
      }

      // Vertical pillar
      for (let i = 0; i <= 40; i++) {
        const y = -2.5 + (i / 40) * 4;
        points.push(new THREE.Vector3(0, y, 0));
        if (i % 5 === 0) {
          // Add rings
          for (let j = 0; j <= 16; j++) {
            const angle = (j / 16) * Math.PI * 2;
            points.push(
              new THREE.Vector3(
                Math.cos(angle) * 0.2,
                y,
                Math.sin(angle) * 0.2,
              ),
            );
          }
        }
      }

      // Horizontal beam
      for (let i = 0; i <= 40; i++) {
        const x = -2 + (i / 40) * 4;
        points.push(new THREE.Vector3(x, 1.5, 0));
      }

      // Left pan
      for (let i = 0; i <= 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 0.5;
        points.push(
          new THREE.Vector3(
            -1.8 + Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius,
          ),
        );
      }
      // Left pan bowl
      for (let i = 0; i <= 10; i++) {
        const angle = (i / 10) * Math.PI * 2;
        const radius = 0.5;
        const y = -0.3;
        points.push(
          new THREE.Vector3(
            -1.8 + Math.cos(angle) * radius,
            y,
            Math.sin(angle) * radius,
          ),
        );
      }

      // Right pan
      for (let i = 0; i <= 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 0.5;
        points.push(
          new THREE.Vector3(
            1.8 + Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius,
          ),
        );
      }
      // Right pan bowl
      for (let i = 0; i <= 10; i++) {
        const angle = (i / 10) * Math.PI * 2;
        const radius = 0.5;
        const y = -0.3;
        points.push(
          new THREE.Vector3(
            1.8 + Math.cos(angle) * radius,
            y,
            Math.sin(angle) * radius,
          ),
        );
      }

      // Chains (left)
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        points.push(new THREE.Vector3(-1.8, 1.5 - t * 1.5, 0));
      }

      // Chains (right)
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        points.push(new THREE.Vector3(1.8, 1.5 - t * 1.5, 0));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const pointCloud = new THREE.Points(geometry, dottedMaterial);
      const glow = new THREE.Points(geometry.clone(), glowMaterial);

      group.add(pointCloud);
      group.add(glow);
      return group;
    };

    // Create Gavel
    const createGavel = () => {
      const group = new THREE.Group();
      const points: THREE.Vector3[] = [];

      // Gavel head (rectangular)
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const x = -0.6 + t * 1.2;
        points.push(new THREE.Vector3(x, 1, 0.3));
        points.push(new THREE.Vector3(x, 1, -0.3));
        points.push(new THREE.Vector3(x, 0.4, 0.3));
        points.push(new THREE.Vector3(x, 0.4, -0.3));
      }

      // Gavel head edges
      for (let i = 0; i <= 10; i++) {
        const t = i / 10;
        const z = -0.3 + t * 0.6;
        points.push(new THREE.Vector3(-0.6, 1, z));
        points.push(new THREE.Vector3(0.6, 1, z));
        points.push(new THREE.Vector3(-0.6, 0.4, z));
        points.push(new THREE.Vector3(0.6, 0.4, z));
      }

      // Handle
      for (let i = 0; i <= 40; i++) {
        const t = i / 40;
        const y = 0.7 - t * 3;
        const angle = (i / 40) * Math.PI * 2;
        const radius = 0.1;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radius,
            y,
            Math.sin(angle) * radius,
          ),
        );
      }

      // Sound block
      for (let i = 0; i <= 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 0.8;
        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radius,
            -2.5,
            Math.sin(angle) * radius,
          ),
        );
      }

      // Sound block height
      for (let i = 0; i <= 10; i++) {
        const t = i / 10;
        const y = -2.5 + t * 0.4;
        points.push(new THREE.Vector3(0.8, y, 0));
        points.push(new THREE.Vector3(-0.8, y, 0));
        points.push(new THREE.Vector3(0, y, 0.8));
        points.push(new THREE.Vector3(0, y, -0.8));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const pointCloud = new THREE.Points(geometry, dottedMaterial);
      const glow = new THREE.Points(geometry.clone(), glowMaterial);

      group.add(pointCloud);
      group.add(glow);
      return group;
    };

    // Create Law Book
    const createBook = () => {
      const group = new THREE.Group();
      const points: THREE.Vector3[] = [];

      // Book cover outline
      const width = 2;
      const height = 2.5;
      const depth = 0.4;

      // Front cover
      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        points.push(
          new THREE.Vector3(-width / 2, -height / 2 + t * height, depth / 2),
        );
        points.push(
          new THREE.Vector3(width / 2, -height / 2 + t * height, depth / 2),
        );
      }

      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        points.push(
          new THREE.Vector3(-width / 2 + t * width, -height / 2, depth / 2),
        );
        points.push(
          new THREE.Vector3(-width / 2 + t * width, height / 2, depth / 2),
        );
      }

      // Back cover
      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        points.push(
          new THREE.Vector3(-width / 2, -height / 2 + t * height, -depth / 2),
        );
        points.push(
          new THREE.Vector3(width / 2, -height / 2 + t * height, -depth / 2),
        );
      }

      // Spine
      for (let i = 0; i <= 30; i++) {
        const t = i / 30;
        points.push(
          new THREE.Vector3(-width / 2, -height / 2 + t * height, -depth / 2),
        );
        points.push(
          new THREE.Vector3(-width / 2, -height / 2 + t * height, depth / 2),
        );
      }

      // Pages effect
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const offset = 0.3;
        points.push(
          new THREE.Vector3(
            width / 2 - offset,
            -height / 2 + t * height,
            -depth / 2 + 0.1,
          ),
        );
        points.push(
          new THREE.Vector3(
            width / 2 - offset,
            -height / 2 + t * height,
            depth / 2 - 0.1,
          ),
        );
      }

      // Decorative title lines
      for (let i = 0; i <= 10; i++) {
        const t = i / 10;
        const y = 0.5;
        points.push(
          new THREE.Vector3(
            -width / 2 + 0.3 + t * (width - 0.6),
            y,
            depth / 2 + 0.01,
          ),
        );
      }

      for (let i = 0; i <= 10; i++) {
        const t = i / 10;
        const y = 0.2;
        points.push(
          new THREE.Vector3(
            -width / 2 + 0.5 + t * (width - 1),
            y,
            depth / 2 + 0.01,
          ),
        );
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const pointCloud = new THREE.Points(geometry, dottedMaterial);
      const glow = new THREE.Points(geometry.clone(), glowMaterial);

      group.add(pointCloud);
      group.add(glow);
      return group;
    };

    // Create all objects
    const objects = [createScales(), createGavel(), createBook()];
    let currentObjectIndex = 0;
    let activeObject: THREE.Group | null = null;

    // Add only the first object initially
    activeObject = objects[currentObjectIndex];
    scene.add(activeObject);

    // Rotation and transition
    let rotationSpeed = 0.008;
    let time = 0;
    let displayTime = 0;
    let transitionProgress = 0;
    let isTransitioning = false;
    let nextObjectIndex = 1;
    let pulseTime = 0;

    const animate = () => {
      time += 0.016; // ~60fps
      displayTime += 0.016;
      pulseTime += 0.016;

      if (!isTransitioning && activeObject) {
        // Normal rotation with variation
        activeObject.rotation.y += rotationSpeed;
        activeObject.rotation.x = Math.sin(time * 0.3) * 0.15;
        activeObject.rotation.z = Math.cos(time * 0.4) * 0.05;

        // Unique animations for each object
        if (currentObjectIndex === 0) {
          // Scales: Gentle swaying (balancing effect)
          activeObject.position.y = Math.sin(time * 0.6) * 0.15;
          activeObject.rotation.z = Math.sin(time * 0.8) * 0.08;

          // Breathing pulse
          const pulseScale = 1 + Math.sin(pulseTime * 1.5) * 0.03;
          activeObject.scale.setScalar(pulseScale);
        } else if (currentObjectIndex === 1) {
          // Gavel: Subtle striking motion
          activeObject.position.y = Math.sin(time * 1.2) * 0.1;
          activeObject.rotation.z = Math.sin(time * 2) * 0.12;

          // Slight tilt like ready to strike
          activeObject.rotation.x = Math.sin(time * 0.5) * 0.1 + 0.15;

          // Sharper pulse
          const pulseScale = 1 + Math.sin(pulseTime * 2.5) * 0.04;
          activeObject.scale.setScalar(pulseScale);
        } else if (currentObjectIndex === 2) {
          // Book: Opening/closing effect
          activeObject.position.y = Math.sin(time * 0.5) * 0.12;

          // Gentle tilt like pages turning
          activeObject.rotation.x = Math.sin(time * 0.7) * 0.1;
          activeObject.rotation.z = Math.cos(time * 0.6) * 0.06;

          // Slow breathing pulse
          const pulseScale = 1 + Math.sin(pulseTime * 1.2) * 0.035;
          activeObject.scale.setScalar(pulseScale);
        }

        // Rotate camera slightly for dynamic view
        camera.position.x = Math.sin(time * 0.2) * 1;
        camera.position.y = Math.cos(time * 0.15) * 0.5;
        camera.lookAt(0, 0, 0);

        // Check if it's time to transition (every 5 seconds)
        if (displayTime > 5) {
          displayTime = 0;
          isTransitioning = true;
          transitionProgress = 0;
          nextObjectIndex = (currentObjectIndex + 1) % objects.length;

          // Reset to default scale before transition
          if (activeObject) {
            activeObject.scale.setScalar(1);
          }
        }
      } else if (isTransitioning) {
        // Transition animation
        transitionProgress += 0.02;

        if (transitionProgress <= 0.5) {
          // Fade out current object with spiral effect
          if (activeObject) {
            const fadeOut = 1 - transitionProgress * 2;
            activeObject.scale.setScalar(fadeOut);
            activeObject.rotation.y += rotationSpeed * 6;
            activeObject.position.y = transitionProgress * 3;

            // Make it transparent
            activeObject.traverse((child) => {
              if (child instanceof THREE.Points) {
                (child.material as THREE.PointsMaterial).opacity =
                  fadeOut * 0.9;
              }
            });
          }

          // Remove at midpoint
          if (transitionProgress >= 0.48 && activeObject) {
            scene.remove(activeObject);

            // Reset the old object
            activeObject.position.set(0, 0, 0);
            activeObject.rotation.set(0, 0, 0);
            activeObject.scale.setScalar(1);
            activeObject.traverse((child) => {
              if (child instanceof THREE.Points) {
                (child.material as THREE.PointsMaterial).opacity = 0.9;
              }
            });

            activeObject = null;
          }
        } else {
          // Fade in next object with upward spiral
          if (!activeObject) {
            activeObject = objects[nextObjectIndex];
            scene.add(activeObject);
            currentObjectIndex = nextObjectIndex;
            setCurrentObject(currentObjectIndex);
            setObjectName(objectNames[currentObjectIndex]);

            activeObject.scale.setScalar(0);
            activeObject.position.y = -3;
            activeObject.rotation.set(0, 0, 0);
          }

          const fadeIn = (transitionProgress - 0.5) * 2;
          activeObject.scale.setScalar(fadeIn);
          activeObject.position.y = -3 + fadeIn * 3;
          activeObject.rotation.y += rotationSpeed * 4;

          // Fade in opacity
          activeObject.traverse((child) => {
            if (child instanceof THREE.Points) {
              (child.material as THREE.PointsMaterial).opacity = fadeIn * 0.9;
            }
          });
        }

        if (transitionProgress >= 1) {
          // Reset everything
          if (activeObject) {
            activeObject.scale.setScalar(1);
            activeObject.position.y = 0;
            activeObject.rotation.set(0, 0, 0);
            activeObject.traverse((child) => {
              if (child instanceof THREE.Points) {
                (child.material as THREE.PointsMaterial).opacity = 0.9;
              }
            });
          }
          isTransitioning = false;
          transitionProgress = 0;
          pulseTime = 0;
        }
      }

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => updateSize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center p-4">
      <motion.div
        className="relative w-full max-w-[600px] aspect-square"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Minimal frame */}
        {/* <div className="absolute inset-0 border border-white/5">
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20" />
        </div> */}

        {/* 3D Canvas */}
        <div ref={containerRef} className="w-full h-full" />

        {/* Subtle scanline - law firm aesthetic */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent"
            animate={{ y: [0, 600] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(201, 162, 39, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(201, 162, 39, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </motion.div>

      {/* Object label */}
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={currentObject}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/50 border border-white/20 backdrop-blur-sm"
        >
          <span className="text-sm font-mono text-white tracking-widest">
            {objectName}
          </span>
        </motion.div>
      </AnimatePresence> */}

      {/* Corner labels */}
      {/* <motion.div
        className="absolute top-6 left-6 px-3 py-1.5 bg-black/30 border border-white/10"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-mono text-white/70">HOLOGRAPHIC</span>
      </motion.div>

      <motion.div
        className="absolute top-6 right-6 px-3 py-1.5 bg-black/30 border border-white/10"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <span className="text-xs font-mono text-white/70">LEGAL SYSTEM</span>
      </motion.div> */}
    </div>
  );
}
