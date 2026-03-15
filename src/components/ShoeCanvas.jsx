import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import { Suspense, useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import ModelLoader from "./ModelLoader";

// const blob = await head(import.meta.env.VITE_BLOB_URL, {
//   token: import.meta.env.VITE_READ_WRITE_TOKEN,
// });

const modelUrl = import.meta.env.VITE_BLOB_URL;

function ShoeModel({ isUserInteracting, onLoad }) {
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
    <primitive ref={modelRef} object={scene} scale={80} position={[0, 0, 0]} />
  );
}

useGLTF.preload(modelUrl);

export default function ShoeCanvas() {
  const [interacting, setInteracting] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  return (
    <motion.div
      className="w-full h-full cursor-grab active:cursor-grabbing"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Canvas camera={{ position: [0, 20, 160], fov: 35 }}>
        {/* Lighting setup (better for product showcase) */}
        <ambientLight intensity={0.35} />

        <directionalLight
          position={[120, 100, 80]}
          intensity={0.3}
          color="#FFD8A8"
        />

        <directionalLight
          position={[-80, 40, -60]}
          intensity={0.2}
          color="#FFD8A8"
        />

        <Suspense
          fallback={
            <Html fullScreen>
              <ModelLoader isLoaded={false} />
            </Html>
          }
        >
          {/* <ShoeModel
            isUserInteracting={interacting}
            onLoad={() => setModelLoaded(true)}
          />

          <Environment preset="studio" /> */}

          {/* <ContactShadows
            position={[0, -25, 0]}
            opacity={0.4}
            scale={40}
            blur={3}
            far={60}
          /> */}
        </Suspense>

        {/* Keep ModelLoader visible on top */}
        <Html fullScreen>
          <ModelLoader isLoaded={false} />
        </Html>

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
  );
}
