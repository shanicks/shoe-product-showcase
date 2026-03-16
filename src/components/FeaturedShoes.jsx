import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { forwardRef } from "react";

const featuredShoes = [
  {
    id: 1,
    name: "Air Flex X",
    price: 139,
    rating: 4.5,
    image: "/shoe_brown.png",
  },
  {
    id: 2,
    name: "Air Flex X",
    price: 139,
    rating: 4.5,
    image: "/shoe_black.png",
  },
  {
    id: 3,
    name: "Air Flex X",
    price: 139,
    rating: 4.5,
    image: "/shoe_white.png",
  },
  {
    id: 4,
    name: "Air Flex X",
    price: 139,
    rating: 4.5,
    image: "/shoe_red.png",
  },
  {
    id: 5,
    name: "Air Flex X",
    price: 139,
    rating: 4.5,
    image: "/shoe_blue.png",
  },
];

const FeaturedShoes = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative w-full py-20 bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] overflow-hidden"
    >
      {/* Background Typography */}
      <h2 className="absolute text-[200px] md:text-[280px] font-extrabold opacity-5 select-none pointer-events-none font-bebas -right-20">
        STRIDE
      </h2>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-12">
          <h3 className="text-xl font-bebas tracking-wider uppercase">
            Featuring
          </h3>
          <ChevronRight size={20} className="text-text-secondary" />
        </div>

        {/* Shoes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredShoes.map((shoe, index) => (
            <motion.div
              key={shoe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-surface-card/40 backdrop-blur-sm overflow-hidden hover:border-accent/50 transition group cursor-pointer"
            >
              <div className="aspect-square bg-surface-card/60 flex items-center justify-center overflow-hidden relative">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-4 font-inter">
                <h4 className="text-text-primary font-semibold text-sm">
                  {shoe.name}
                </h4>
                <p className="text-accent font-bold text-sm mt-2">
                  ${shoe.price}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xs ${
                          i < 4 ? "text-yellow-400" : "text-text-muted"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-text-muted text-xs ml-1">
                    ({shoe.rating.toFixed(1)})
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FeaturedShoes;
