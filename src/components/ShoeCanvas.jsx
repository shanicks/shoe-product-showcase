import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import { Suspense, useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import ModelLoader from "./ModelLoader";

THREE.DefaultLoadingManager.crossOrigin = "anonymous";
// const blob = await head(import.meta.env.VITE_BLOB_URL, {
//   token: import.meta.env.VITE_READ_WRITE_TOKEN,
// });

// const modelUrl = import.meta.env.VITE_BLOB_URL;
const modelUrl = `https://corsproxy.io/?${encodeURIComponent(import.meta.env.VITE_BLOB_URL)}`;
function ShoeModel({ isUserInteracting, onLoad, scale }) {
  const { scene } = useGLTF(modelUrl);
  const modelRef = useRef();

  // Call onLoad when model is ready
  useLayoutEffect(() => {
    if (scene && onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);

  // Center model
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);

    // Tilt shoe to -30 degrees on x-axis
    // scene.rotation.x = Math.PI / 4;
    // scene.rotation.y = -Math.PI / 4;
  }, [scene]);

  // Auto rotation
  useFrame((state) => {
    if (!isUserInteracting && modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }

    // subtle floating motion
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload(modelUrl);

export default function ShoeCanvas({ onHoverStart, onHoverEnd }) {
  const [interacting, setInteracting] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [cameraConfig, setCameraConfig] = useState({
    position: [0, 20, 160],
    fov: 35,
    scale: 80,
  });

  // Responsive camera and scale settings based on window size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      let newPosition = [0, 20, 160];
      let newFov = 35;
      let newScale = 80;

      // Mobile (< 640px)
      if (width < 640) {
        newPosition = [0, 15, 100];
        newFov = 40;
        newScale = 12;
      }
      // Tablet (640px - 1024px)
      else if (width < 1024) {
        newPosition = [0, 18, 130];
        newFov = 37;
        newScale = 20;
      }
      // Desktop (> 1024px)
      else {
        newPosition = [0, 20, 160];
        newFov = 35;
        newScale = 28;
      }

      setCameraConfig({
        position: newPosition,
        fov: newFov,
        scale: newScale,
      });
    };

    // Set initial config
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!modelLoaded && <ModelLoader />}
      {
        <motion.div
          className="w-full h-full cursor-grab active:cursor-grabbing"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
        >
          <Canvas
            camera={{ position: cameraConfig.position, fov: cameraConfig.fov }}
          >
            {/* Lighting setup (better for product showcase) */}
            <ambientLight intensity={0} />

            <directionalLight
              position={[120, 100, 80]}
              intensity={0}
              color="#FFD8A8"
            />

            <directionalLight
              position={[-80, 40, -60]}
              intensity={0}
              color="#FFD8A8"
            />

            <Suspense fallback={null}>
              <ShoeModel
                isUserInteracting={interacting}
                onLoad={() => setModelLoaded(true)}
                scale={cameraConfig.scale}
              />

              <Environment preset="studio" />
            </Suspense>

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableDamping
              dampingFactor={0.05}
              rotateSpeed={0.6}
              onStart={() => setInteracting(true)}
              onEnd={() => setInteracting(false)}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Canvas>
        </motion.div>
      }
    </>
  );
}
