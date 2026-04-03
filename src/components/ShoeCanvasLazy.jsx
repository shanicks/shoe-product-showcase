import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Suspense, useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box3, Vector3, SRGBColorSpace, ACESFilmicToneMapping } from "three";
import ModelLoader from "./ModelLoader";
import CustomizerUI from "./CustomizerUI";

// THREE.DefaultLoadingManager.crossOrigin = "anonymous";
// const blob = await head(import.meta.env.VITE_BLOB_URL, {
//   token: import.meta.env.VITE_READ_WRITE_TOKEN,
// });

// const modelUrl = import.meta.env.VITE_BLOB_URL;
// const modelUrl = `https://corsproxy.io/?${encodeURIComponent(import.meta.env.VITE_BLOB_URL)}`;
const isDev = import.meta.env.VITE_DEV;

// const modelUrl = isDev ? import.meta.env.VITE_BLOB_URL : "/api/model";
// const modelUrl = "/sneaker_model2_compressed.glb";
const modelUrl = "/output.glb";

const PART_MAP = {
  body: ["body"],
  sole: ["sole"],
  plastic: ["plastic"],
  laces: ["laces"],
};
function ShoeModel({
  isUserInteracting,
  onLoad,
  scale,
  selectedPart,
  setSelectedPart,
  color,
  setColor,
  offset,
}) {
  const { scene } = useGLTF(modelUrl, true);
  const modelRef = useRef();
  const rotationRef = useRef(0);
  const rotationCount = useRef(0);
  const colorIndex = useRef(0);
  const centerRef = useRef(new Vector3());
  const basePosition = offset; // left, down, forward
  const colors = [
    ["#E6D6B8", "#783F0F"],
    ["#C9C9C7", "#C9C9C7"],
    ["#171717", "#171717"],
    ["#912934", "#912934"],
    ["#193865", "#193865"],
  ];
  // Call onLoad when model is ready
  useLayoutEffect(() => {
    if (scene && onLoad) {
      onLoad();
    }
  }, [scene, onLoad]);

  useLayoutEffect(() => {
    const box = new Box3().setFromObject(scene);
    const center = new Vector3();
    box.getCenter(center);
    // scene.position.sub(center);

    centerRef.current = center;

    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const mat = child.material;

        if (mat.map) mat.map.colorSpace = SRGBColorSpace;
        if (mat.emissiveMap) mat.emissiveMap.colorSpace = SRGBColorSpace;

        if (mat.transmission > 0) {
          mat.transparent = true;
          mat.depthWrite = false;
          mat.envMapIntensity = 1.5;
        }
      }
    });
  }, [scene]);

  useEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      let targets = PART_MAP[selectedPart];

      if (selectedPart === "body") {
        targets = [...PART_MAP.body, ...PART_MAP.laces];
      }

      if (targets.includes(child.name)) {
        const mat = child.material;

        if (selectedPart === "plastic") {
          mat.color.set(color);
          return;
        }

        if (mat.map) mat.map = null;
        mat.color.set(color);
        mat.needsUpdate = true;
      }
    });
  }, [color, selectedPart, scene]);
  // Auto rotation
  useFrame((state) => {
    if (!isUserInteracting && modelRef.current) {
      modelRef.current.rotation.y += 0.013;
    }
    // track rotation
    rotationRef.current += 0.013;
    // one full rotation = π
    if (rotationRef.current >= Math.PI * 1) {
      rotationRef.current = 0;
      rotationCount.current += 1;
    }

    // after 1 rotations → change color
    if (rotationCount.current === 1) {
      rotationCount.current = 0;

      const [bodyColor, soleColor] = colors[colorIndex.current];

      // apply BODY first
      setSelectedPart("body");
      setColor(bodyColor);

      // apply SOLE with slight delay (break batching)
      setTimeout(() => {
        setSelectedPart("sole");
        setColor(soleColor);
      }, 50);

      // move to next color
      colorIndex.current = (colorIndex.current + 1) % colors.length;
    }

    // subtle floating motion
    if (modelRef.current) {
      modelRef.current.position.y =
        basePosition[1] + Math.sin(state.clock.elapsedTime) * 2;
    }
  });

  return (
    <group ref={modelRef} position={basePosition} scale={scale}>
      <group
        position={[
          -centerRef.current.x,
          -centerRef.current.y,
          -centerRef.current.z,
        ]}
      >
        <primitive object={scene} />
      </group>
    </group>
  );
}

// useGLTF.preload(modelUrl);

export default function ShoeCanvas({
  onHoverStart,
  onHoverEnd,
  selectedPart,
  setSelectedPart,
  color,
  setColor,
}) {
  const [offset, setOffset] = useState([0, 0, 0]);
  const [interacting, setInteracting] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [cameraConfig, setCameraConfig] = useState({
    position: [0, 20, 160],
    fov: 35,
    scale: 80,
    // target: offset,
  });
  const controlsRef = useRef();
  const target = new Vector3(5, 0, 5);
  let isMobile = false;
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
        newScale = 13;
        setOffset([-3, 10, 0]);
        isMobile = true;
      }
      // Tablet (640px - 1024px)
      else if (width < 1024) {
        newPosition = [0, 18, 130];
        newFov = 37;
        newScale = 20;
        setOffset([0, 0, 0]); // slight adjustment for medium screens
      }
      // Desktop (> 1024px)
      else {
        newPosition = [0, 20, 160];
        newFov = 35;
        newScale = 28;
        setOffset([27, 5, 0]); // default offset for large screens
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

  useEffect(() => {
    setTimeout(() => {
      if (controlsRef.current) {
        console.log("Orbit Target:", controlsRef.current.target);
      } else {
        console.log("Controls not ready yet");
      }
    }, 500);
  }, []);

  return (
    <>
      {!modelLoaded && <ModelLoader />}
      {/* <CustomizerUI
        selectedPart={selectedPart}
        setSelectedPart={setSelectedPart}
        color={color}
        setColor={setColor}
      /> */}
      {
        <motion.div
          className="w-full h-[60vh] md:h-[90vh]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
        >
          <Canvas
            dpr={[1, 1.5]} // limit pixel ratio
            performance={{ min: 0.5 }}
            camera={{ position: cameraConfig.position, fov: cameraConfig.fov }}
            gl={{
              outputColorSpace: SRGBColorSpace,
              toneMapping: ACESFilmicToneMapping,
            }}
          >
            {/* Lighting setup (better for product showcase) */}
            <ambientLight intensity={1} />

            <directionalLight
              position={[120, 100, 80]}
              intensity={3}
              color="#FFFFFF"
            />

            <directionalLight
              position={[-80, 40, -60]}
              intensity={2}
              color="#FFFFFF"
            />

            <Suspense fallback={null}>
              <ShoeModel
                isUserInteracting={interacting}
                onLoad={() => setModelLoaded(true)}
                scale={cameraConfig.scale}
                // scale={1}
                selectedPart={selectedPart}
                color={color}
                setSelectedPart={setSelectedPart}
                setColor={setColor}
                offset={offset}
              />

              {/* <Environment preset="studio" /> */}
            </Suspense>

            {/* <OrbitControls
              // target={[60, 0, 40]}
              enabled={isMobile}
              ref={controlsRef}
              // target0={target}
              enableZoom={false}
              enablePan={false}
              enableDamping
              dampingFactor={0.05}
              rotateSpeed={0.6}
              onStart={() => setInteracting(true)}
              onEnd={() => setInteracting(false)}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.8}
            /> */}
          </Canvas>
        </motion.div>
      }
    </>
  );
}
