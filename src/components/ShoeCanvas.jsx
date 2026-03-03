import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

function ShoeModel() {
  const { scene } = useGLTF("/shoe1.glb");
  const modelRef = useRef();
  useLayoutEffect(() => {
    if (!modelRef.current) return;

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(modelRef.current);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Reposition model so its center becomes (0,0,0)
    modelRef.current.position.sub(center);
  }, []);
  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={15}
      position={[0, -0.5, 0]}
    />
  );
}

useGLTF.preload("/shoe1.glb");

export default function ShoeCanvas() {
  return (
    <motion.div
      className="w-full h-[500px] cursor-grab active:cursor-grabbing"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <ShoeModel />
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.6}
        />
      </Canvas>
    </motion.div>
  );
}
