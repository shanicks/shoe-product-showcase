import { motion } from "framer-motion";

const colors = ["brown", "green", "red"];

export default function ColorSelector({ selectedColor, setColor }) {
  return (
    <div className="flex gap-4 pt-4">
      {colors.map((color) => (
        <motion.div
          key={color}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setColor(color)}
          className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
            selectedColor === color ? "border-white" : "border-transparent"
          } ${
            color === "brown"
              ? "bg-black"
              : color === "green"
                ? "bg-green-600"
                : "bg-red-600"
          }`}
        />
      ))}
    </div>
  );
}
