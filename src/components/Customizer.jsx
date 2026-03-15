import { motion } from "framer-motion";
import { useState } from "react";

export default function Customizer() {
  const [selectedModel, setSelectedModel] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedPattern, setSelectedPattern] = useState(null);

  const models = [
    { name: "Model 1", image: "/shoe_brown.png" },
    { name: "Model 2", image: "/shoe_brown.png" },
    { name: "Model 3", image: "/shoe_brown.png" },
  ];

  const colors = [
    { name: "Upper", colors: ["#D4A574", "#000000", "#DC143C", "#FFD700", "#4169E1"] },
    { name: "Sole", colors: ["#FFA500", "#FF6347", "#32CD32", "#9932CC", "#FF8C00"] },
    { name: "Logo", colors: ["#FFFFFF", "#000000", "#DC143C", "#FFD700", "#4169E1"] },
  ];

  const materials = ["Leather", "Mesh", "Suede", "Knit"];
  const patterns = [
    {
      name: "Solid",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%238B7355' width='100' height='100'/%3E%3C/svg%3E",
    },
    {
      name: "Checkered",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%238B7355' width='100' height='100'/%3E%3Crect fill='%23C4A57B' x='0' y='0' width='50' height='50'/%3E%3Crect fill='%23C4A57B' x='50' y='50' width='50' height='50'/%3E%3C/svg%3E",
    },
    {
      name: "Stripes",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%238B7355' width='100' height='100'/%3E%3Crect fill='%23C4A57B' x='0' y='0' width='10' height='100'/%3E%3Crect fill='%23C4A57B' x='20' y='0' width='10' height='100'/%3E%3Crect fill='%23C4A57B' x='40' y='0' width='10' height='100'/%3E%3C/svg%3E",
    },
    {
      name: "Dots",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%238B7355' width='100' height='100'/%3E%3Ccircle cx='25' cy='25' r='8' fill='%23C4A57B'/%3E%3Ccircle cx='75' cy='75' r='8' fill='%23C4A57B'/%3E%3C/svg%3E",
    },
  ];

  const totalPrice = 99.9 + 35.0 + 15.0;

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] overflow-hidden">
      {/* Background Typography */}
      <h2 className="absolute text-[180px] md:text-[240px] font-extrabold opacity-5 select-none pointer-events-none font-bebas -left-20 top-32">
        STRIDE
      </h2>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wider uppercase mb-3">
            Customize Your Sneaker
          </h1>
          <p className="text-text-secondary font-inter">
            Create a shoe that reflects your style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Customization Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 font-inter"
          >
            {/* Model Selection */}
            <div>
              <h3 className="text-sm font-bold text-text-primary mb-4 uppercase">
                Choose Model
              </h3>
              <div className="flex gap-3">
                {models.map((model, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedModel(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition ${
                      selectedModel === index
                        ? "border-accent"
                        : "border-burnt-light/30 hover:border-accent/50"
                    }`}
                  >
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-16 h-16 object-cover"
                    />
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs bg-black/60 px-2 py-1 rounded text-text-muted">
                      {model.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            {colors.map((colorGroup, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="text-sm font-bold text-text-primary mb-4 uppercase">
                  {colorGroup.name}
                </h3>
                <div className="flex gap-3">
                  {colorGroup.colors.map((color, colorIndex) => (
                    <button
                      key={colorIndex}
                      onClick={() => setSelectedColor(`${groupIndex}-${colorIndex}`)}
                      className={`w-10 h-10 rounded-full border-2 transition ${
                        selectedColor === `${groupIndex}-${colorIndex}`
                          ? "border-white scale-110"
                          : "border-white/20 hover:border-accent/50"
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Material Selection */}
            <div>
              <h3 className="text-sm font-bold text-text-primary mb-4 uppercase">
                Material Selection
              </h3>
              <div className="flex flex-wrap gap-2">
                {materials.map((material, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMaterial(index)}
                    className={`px-4 py-2 rounded-lg border transition text-xs font-medium ${
                      selectedMaterial === index
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-burnt-light/30 text-text-secondary hover:border-accent/50"
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Pattern Selection */}
            <div>
              <h3 className="text-sm font-bold text-text-primary mb-4 uppercase">
                Select Pattern
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {patterns.map((pattern, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPattern(index)}
                    className={`aspect-square rounded-lg border-2 overflow-hidden transition ${
                      selectedPattern === index
                        ? "border-accent"
                        : "border-burnt-light/30 hover:border-accent/50"
                    }`}
                    title={pattern.name}
                  >
                    <img
                      src={pattern.image}
                      alt={pattern.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center: Shoe Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="bg-surface-card/40 backdrop-blur-sm border border-burnt-light/20 rounded-lg overflow-hidden p-8 aspect-square flex items-center justify-center max-w-sm mx-auto w-full">
              <img
                src={models[selectedModel].image}
                alt="Custom Shoe"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Price and Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-surface-card/40 backdrop-blur-sm border border-burnt-light/20 rounded-lg p-8 h-fit font-inter"
          >
            <h3 className="text-2xl font-bebas tracking-wider mb-6">BASE</h3>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b border-burnt-light/20">
              <div className="flex justify-between text-text-secondary text-sm">
                <span>Base</span>
                <span>$99.9</span>
              </div>
              <div className="flex justify-between text-text-secondary text-sm">
                <span>Customization</span>
                <span>$35.0</span>
              </div>
              <div className="flex justify-between text-text-secondary text-sm">
                <span>Total</span>
                <span>$15.0</span>
              </div>
            </div>

            {/* Final Total */}
            <div className="mb-8 pb-8 border-b border-burnt-light/20">
              <div className="flex justify-between items-end">
                <span className="text-text-muted text-sm">Total</span>
                <span className="text-2xl font-bold text-accent">
                  ${totalPrice.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-cyan-400 transition uppercase text-sm tracking-wide">
                Add to Cart
              </button>
              <button className="w-full border-2 border-accent text-accent font-bold py-3 rounded-lg hover:bg-accent/10 transition uppercase text-sm tracking-wide">
                Order Custom Shoe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
