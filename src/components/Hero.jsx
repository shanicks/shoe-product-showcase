import { Facebook, Twitter, Instagram, ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, lazy } from "react";
import { Button } from "./ui/button";

const ShoeCanvasLazy = lazy(() => import("./ShoeCanvasLazy"));

export default function Hero({ nextSectionRef }) {
  const [hoveringShoe, setHoveringShoe] = useState(false);
  const scrollToNext = () => {
    if (nextSectionRef?.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [viewBox, setViewBox] = useState("0 0 1200 300"); // default desktop
  const [isDesktop, setIsDesktop] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const updateViewBox = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        setViewBox("20 0 500 700");
        setIsDesktop(false);
        setIsTablet(false);
      } else if (width < 1024) {
        // Tablet (middle)
        setViewBox("0 0 800 500"); // choose values between mobile and desktop
        setIsDesktop(false);
        setIsTablet(true);
      } else {
        // Desktop
        setViewBox("0 0 1200 300");
        setIsDesktop(true);
        setIsTablet(false);
      }
    };

    updateViewBox(); // run on mount
    window.addEventListener("resize", updateViewBox);

    return () => window.removeEventListener("resize", updateViewBox);
  }, []);

  const showUI = isDesktop ? hoveringShoe : true;
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] overflow-hidden touch-auto -translate-y-26 sm:-translate-y-12 md:translate-y-0">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none lg:translate-y-[45px]">
        <svg
          viewBox={viewBox}
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
      <div className="hidden md:flex absolute z-10 left-4 md:left-10 flex-col gap-12 md:gap-6 mb-8 md:mb-0 cursor-pointer">
        <Facebook size={18} className="text-white/60 hover:text-white" />
        <Twitter size={18} className="text-white/60 hover:text-white" />
        <Instagram size={18} className="text-white/60 hover:text-white" />
      </div>

      {/* Shoe Container */}
      <div className="relative w-full max-w-[900px] h-[500px] md:h-[650px] flex items-center justify-center translate-x-6 md:translate-x-12">
        <ShoeCanvasLazy
          onHoverStart={() => setHoveringShoe(true)}
          onHoverEnd={() => setHoveringShoe(false)}
        />

        <p className="absolute bottom-25 sm:bottom-16 md:bottom-10 left-1/2 -translate-x-[60%] md:-translate-x-[65%] text-white/60 text-xs text-center">
          Press and Hold to interact with the 3D shoe
        </p>

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* SVG Connector */}
        <svg
          className="w-[600px] h-[400px]"
          viewBox="0 0 600 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {/* Center Dot */}
          <motion.circle
            cx="300"
            cy="200"
            r="4"
            fill="white"
            initial={isDesktop ? { scale: 0 } : false}
            animate={{ scale: showUI ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Diagonal Line */}
          <motion.line
            x1="300"
            y1="200"
            x2={isDesktop ? "550" : isTablet ? "450" : "350"}
            y2={isDesktop ? "350" : isTablet ? "350" : "250"}
            strokeWidth="2"
            initial={isDesktop ? { pathLength: 0 } : false}
            animate={{ pathLength: showUI ? 1 : 0 }}
            transition={{ duration: 0.5, delay: isDesktop ? 0.2 : 0 }}
          />

          {/* Horizontal Line */}
          <motion.line
            x1={isDesktop ? "550" : isTablet ? "450" : "350"}
            y1={isDesktop ? "350" : isTablet ? "350" : "250"}
            x2={isDesktop ? "900" : isTablet ? "700" : "400"}
            y2={isDesktop ? "350" : isTablet ? "350" : "250"}
            strokeWidth="2"
            initial={isDesktop ? { pathLength: 0 } : false}
            animate={{ pathLength: showUI ? 1 : 0 }}
            transition={{ duration: 0.3, delay: isDesktop ? 0.7 : 0 }}
          />
        </svg>

        {/* Buy Now Button */}
        <motion.button
          className="pointer-events-auto cursor-pointer absolute left-[400px] sm:left-[500px] md:left-[600px] top-[225px] sm:top-[257px] md:top-[308px] w-[45px] h-[45px] md:w-[80px] md:h-[80px] rounded-full text-white font-semibold flex items-center justify-center mr-10 text-xs md:text-sm text-center"
          style={{ backgroundColor: "#B85D0A" }}
          initial={isDesktop ? { scale: 0, opacity: 0 } : false}
          animate={{
            scale: showUI ? 1 : 0,
            opacity: showUI ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: isDesktop ? 1 : 0 }}
          onClick={() => alert("Buy Now clicked!")}
        >
          80% OFF
        </motion.button>
      </div>
      <Button
        size="lg"
        className="cursor-pointer px-8 py-8 text-lg backdrop-blur-lg rounded-xl shadow border border-white/20 bg-[#B85D0A] text-white absolute rounded-full bottom-35 sm:bottom-25 md:bottom-10 left-1/2 -translate-x-1/2 px-6 py-3"
      >
        Buy Now
      </Button>
      {/* Scroll to Next Section Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
          transition: { repeat: Infinity, duration: 2 },
        }}
        onClick={scrollToNext}
        className="md:hidden absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3"
      >
        <ArrowDownToLine className="w-4 h-4 mr-2" />
      </motion.button>
    </section>
  );
}
