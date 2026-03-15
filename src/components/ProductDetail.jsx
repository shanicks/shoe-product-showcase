import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { us: "US 3", eu: "35" },
    { us: "US 4", eu: "36" },
    { us: "US 5", eu: "37" },
    { us: "US 6", eu: "38" },
    { us: "US 7", eu: "39" },
    { us: "US 8", eu: "40" },
    { us: "US 9", eu: "41" },
    { us: "US 10", eu: "42" },
  ];

  const shoeColorOptions = [
    { color: "Teal", image: "/shoe_brown.png" },
    { color: "White", image: "/shoe_brown.png" },
    { color: "Beige", image: "/shoe_brown.png" },
    { color: "Pink", image: "/shoe_brown.png" },
    { color: "Green", image: "/shoe_brown.png" },
  ];

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] overflow-hidden">
      {/* Background Typography */}
      <h2 className="absolute text-[200px] md:text-[280px] font-extrabold opacity-5 select-none pointer-events-none font-bebas -right-20">
        STRIDE
      </h2>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Shoe Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-surface-card/40 backdrop-blur-sm border border-burnt-light/20 rounded-lg overflow-hidden p-8 flex items-center justify-center min-h-[450px]"
          >
            <img
              src="/shoe_brown.png"
              alt="Air Flow X"
              className="w-full max-w-sm h-auto object-cover"
            />
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-inter"
          >
            {/* Title and Price */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bebas tracking-wider mb-4">
                AIR FLOW X
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent">$129</span>
                <span className="text-text-muted line-through">$189</span>
              </div>
              <p className="text-text-secondary mt-4 leading-relaxed">
                A lightweight neo runner designed for speed, comfort and everyday
                performance. Engineered with breathable mesh and responsive
                cushioning with sleek silhouette.
              </p>
            </div>

            {/* Color Options */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-text-primary mb-4">
                CHOOSE COLOR
              </h3>
              <div className="flex gap-3">
                {shoeColorOptions.map((option) => (
                  <button
                    key={option.color}
                    className="w-12 h-12 rounded-lg border-2 border-transparent hover:border-accent transition bg-surface-card/40 hover:bg-surface-card/60 flex items-center justify-center"
                    title={option.color}
                  >
                    <img
                      src={option.image}
                      alt={option.color}
                      className="w-8 h-8 object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-text-primary mb-4">
                SELECT SIZE
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(index)}
                    className={`py-3 px-2 rounded-lg border-2 transition text-xs font-medium ${
                      selectedSize === index
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-burnt-light/30 text-text-secondary hover:border-accent/50"
                    }`}
                  >
                    {size.us}
                  </button>
                ))}
              </div>
              <p className="text-text-muted text-xs mt-3">
                EU sizes: {sizes.length > 0 && sizes[selectedSize || 0]?.eu}
              </p>
            </div>

            {/* Quantity */}
            <div className="mb-8 flex items-center gap-4">
              <span className="text-sm font-semibold text-text-primary">
                QUANTITY
              </span>
              <div className="flex items-center border border-burnt-light/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-surface-card/40 hover:bg-surface-card/60 transition text-text-secondary"
                >
                  −
                </button>
                <span className="px-6 py-2 text-text-primary font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-surface-card/40 hover:bg-surface-card/60 transition text-text-secondary"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-accent text-black font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 transition flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                ADD TO CART
              </button>
              <button className="px-6 py-3 border-2 border-burnt-light/30 rounded-lg hover:border-accent/50 transition text-text-secondary hover:text-accent">
                <Heart size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
