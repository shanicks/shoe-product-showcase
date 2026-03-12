import { motion } from "framer-motion";

export default function ModelLoader({ isLoaded }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <motion.img
        src="/shoe_brown.png"
        alt="Loading..."
        className="max-w-4xl max-h-4xl"
        initial={{ opacity: 1, filter: "blur(20px)" }}
        animate={
          isLoaded
            ? { opacity: 0, filter: "blur(0px)" }
            : { opacity: 1, filter: "blur(20px)" }
        }
        transition={{
          duration: isLoaded ? 0.6 : 10,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
