import { motion } from "framer-motion";

export default function ShoeDisplay({ image }) {
  return (
    <motion.div
      className="relative flex justify-center items-center cursor-grab"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={image}
        alt="Sneaker"
        className="w-[500px] drop-shadow-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ rotateY: 10, scale: 1.05 }}
      />
    </motion.div>
  );
}
