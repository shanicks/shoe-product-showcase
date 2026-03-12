import { motion } from "framer-motion";

export default function ModelLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative w-24 h-24 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Outer rotating ring */}
        <motion.div
          className="absolute w-24 h-24 rounded-full border border-[#B8BEC4]/40"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        />

        {/* Inner pulse */}
        <motion.div
          className="w-6 h-6 rounded-full bg-[#C9CED6]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
        />

        {/* Subtle glow */}
        <div className="absolute w-10 h-10 rounded-full bg-[#B8BEC4]/20 blur-xl" />
      </motion.div>
    </div>
  );
}
