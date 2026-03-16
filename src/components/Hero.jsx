import ShoeCanvas from "./ShoeCanvas";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg viewBox="0 0 1200 300" className="w-full">
          <defs>
            <mask id="kixora-mask">
              <rect width="100%" height="100%" fill="black" />
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                fontSize="220"
                fontFamily="Bebas Neue"
                fill="white"
                letterSpacing="40"
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
      <div className="absolute z-10 left-4 md:left-10 flex flex-col gap-6 text-white/60">
        <Facebook size={18} />
        <Twitter size={18} />
        <Instagram size={18} />
      </div>

      {/* Shoe Container */}
      <div className="relative w-full max-w-[900px] h-[500px] md:h-[650px] flex items-center justify-center translate-x-6 md:translate-x-12">
        <ShoeCanvas />

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

      {/* Scroll Indicator */}
      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 h-[80px] w-[2px] bg-white/60">
        <div className="h-[25px] bg-white w-full animate-pulse"></div>
      </div>
    </section>
  );
}
