import { motion } from "framer-motion";

export default function ModelLoader({ isLoaded }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <motion.img
        src="/shoe_brown.png"
        alt="Loading..."
        className="max-w-3xl max-h-3xl"
        initial={{ opacity: 0, filter: "blur(20px)", rotate: -25, scaleX: -1, y: 0 }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          rotate: -25,
          scaleX: -1,
          y: [0, -20, 0],
        }}
        transition={{
          opacity: { duration: 0.6 },
          filter: { duration: 0.6 },
          rotate: { duration: 0 },
          scaleX: { duration: 0 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
