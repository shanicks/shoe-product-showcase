import ShoeCanvas from "./ShoeCanvas";
import { Facebook, Twitter, Instagram, ArrowDownToLine } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Hero({ nextSectionRef }) {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [hoveringShoe, setHoveringShoe] = useState(false);
  const scrollToNext = () => {
    if (nextSectionRef?.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] overflow-hidden touch-auto">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none lg:translate-y-[45px]">
        <svg
          viewBox="0 0 1200 300"
          className="w-[800px] sm:w-[1100px] md:w-[1600px] lg:w-[2000px]"
        >
          <defs>
            <mask id="kixora-mask">
              <rect width="100%" height="100%" fill="black" />
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                fontSize="260"
                fontFamily="Bebas Neue"
                fontWeight="800"
                fill="white"
                letterSpacing="55"
              >
                KIXORA
              </text>
            </mask>
          </defs>

          <foreignObject width="100%" height="100%" mask="url(#kixora-mask)">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/shoe_video.mp4" type="video/mp4" />
            </video>
          </foreignObject>
        </svg>
      </div>

      {/* Social Icons */}
      <div className="absolute z-10 left-4 md:left-10 flex flex-col gap-6 cursor-pointer">
        <Facebook size={18} className="text-white/60 hover:text-white" />
        <Twitter size={18} className="text-white/60 hover:text-white" />
        <Instagram size={18} className="text-white/60 hover:text-white" />
      </div>

      {/* Shoe Container */}
      <div className="relative w-full max-w-[900px] h-[500px] md:h-[650px] flex items-center justify-center translate-x-6 md:translate-x-12">
        <ShoeCanvas
          onHoverStart={() => setHoveringShoe(true)}
          onHoverEnd={() => setHoveringShoe(false)}
        />

        {/* Feature Label 1 */}
        <div className="absolute top-[12%] right-[28%] sm:right-[24%] md:right-[30%] text-sm font-inter">
          <svg
            className="absolute -left-6 top-6 sm:-top-2 w-8 h-[200px] md:h-[300px] text-white"
            viewBox="0 0 30 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            preserveAspectRatio="xMidYMid meet"
          >
            <line x1="10" y1="0" x2="10" y2="150" />
            <line x1="11" y1="0" x2="30" y2="0" strokeWidth="3" />
            <circle
              cx="10"
              cy="150"
              r="6"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <p className="font-semibold ml-4 mt-4 sm:-mt-4">AIR FLOW X</p>
          <p className="text-white/70 ml-4 -mt-1">$129</p>
        </div>

        {/* Feature Label 2 */}
        <div className="absolute bottom-[18%] left-[28%] sm:left-[24%] md:left-[30%] text-sm font-inter">
          <svg
            className="absolute -right-6 bottom-6 sm:-bottom-2 w-8 h-[160px] md:h-[240px] text-white"
            style={{ transform: "rotate(180deg)" }}
            viewBox="0 0 30 240"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            preserveAspectRatio="xMidYMid meet"
          >
            <line x1="10" y1="0" x2="10" y2="150" />
            <line x1="11" y1="0" x2="30" y2="0" strokeWidth="3" />
            <circle
              cx="10"
              cy="150"
              r="6"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <p className="absolute mr-4 -top-[60px] sm:-top-[34px] right-0 max-w-[120px] md:max-w-[140px] font-semibold text-right leading-tight">
            A lightweight neo runner designed for speed.
          </p>
        </div>
      </div>
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> */}
      {/* <svg
          className="w-[600px] h-[400px]" // big enough to cover screen area to the right
          viewBox="0 0 600 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        > */}
      {/* Dot at center */}
      {/* <motion.circle
            cx="300" // middle of SVG width
            cy="200" // middle of SVG height
            r="6"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: hoveringShoe ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          /> */}

      {/* Diagonal line to "Buy Now" */}
      {/* <motion.line
            x1="300" // start at center dot
            y1="200"
            x2="550" // horizontal position of text
            y2="350" // vertical position of text
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: hoveringShoe ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          /> */}

      {/* Optional horizontal line to extend just before text */}
      {/* <motion.line
            x1="550" // end of diagonal
            y1="350"
            x2="900" // small horizontal extension
            y2="350"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: hoveringShoe ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          />
        </svg> */}

      {/* Buy Now Button */}
      {/* <motion.button
          className="pointer-events-auto cursor-pointer absolute left-[600px] top-[305px] w-[80px] h-[80px] rounded-full text-white font-semibold flex items-center justify-center"
          style={{ backgroundColor: "#B85D0A" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: hoveringShoe ? 1 : 0,
            opacity: hoveringShoe ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 1 }}
          onClick={() => alert("Buy Now clicked!")}
        >
          Buy Now
        </motion.button>
      </div> */}

      {/* Scroll Indicator */}
      <div className="fixed z-20 right-4 md:right-10 top-1/2 -translate-y-1/2 h-[80px] w-[2px] bg-white/40 overflow-hidden">
        <motion.div
          style={{ scaleY }}
          className="origin-top w-full h-full bg-white"
        />
      </div>

      {/* Scroll to Next Section Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
          transition: { repeat: Infinity, duration: 2 },
        }}
        onClick={scrollToNext}
        className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 px-6 py-3"
      >
        <ArrowDownToLine className="w-4 h-4 mr-2" />
      </motion.button>
    </section>
  );
}
