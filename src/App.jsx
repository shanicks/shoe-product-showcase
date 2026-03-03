import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import ShoeDisplay from "./components/ShoeCanvas";
import ProductInfo from "./components/ProductInfo";

const colorThemes = {
  brown: {
    bg: "from-[#1E1F22] via-[#2A2C30] to-[#0F1012]",
    accent: "bg-[#C9CED6] hover:bg-[#DDE2E8] text-red-900",
    image: "/shoe1.jpg",
  },
  green: {
    bg: "from-[#0f2e1c] via-[#14532d] to-[#D95A2D]",
    accent: "bg-green-600 hover:bg-green-700",
    image: "/shoe2.jpg",
  },
  red: {
    bg: "from-[#3a0d0d] via-[#7f1d1d] to-[#FC741E]",
    accent: "bg-red-600 hover:bg-red-700",
    image: "/shoe3.jpg",
  },
};

export default function App() {
  const [color, setColor] = useState("brown");
  const theme = colorThemes[color];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${theme.bg} text-white overflow-hidden transition-all duration-700`}
    >
      <Header />

      <div className="relative container mx-auto px-6 pt-24 pb-12">
        {/* Background Typography */}
        <h1 className="absolute text-[180px] font-extrabold opacity-5 top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none">
          SNEAKER
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <ShoeDisplay />

          <ProductInfo
            accent={theme.accent}
            selectedColor={color}
            setColor={setColor}
          />
        </div>
      </div>
    </div>
  );
}
