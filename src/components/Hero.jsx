import ShoeCanvas from "./ShoeCanvas";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] overflow-hidden">
      {/* Background Typography */}
      <h1 className="absolute text-[220px] md:text-[320px] font-extrabold opacity-5 select-none pointer-events-none font-bebas">
        KIXORA
      </h1>

      {/* Social Icons */}
      <div className="absolute left-10 flex flex-col gap-6 text-white/60">
        <Facebook size={18} />
        <Twitter size={18} />
        <Instagram size={18} />
      </div>

      {/* 3D Shoe */}
      <div className="h-full w-full flex items-center justify-center">
        <ShoeCanvas />
      </div>

      {/* Feature Label 1 */}
      <div className="absolute top-[15%] right-[38%] text-sm font-inter">
        <div className="absolute -left-8 top-1.5 w-[2px] h-55 bg-white/60"></div>
        <div className="absolute -left-8 top-1.5 w-6 h-[2px] bg-white/60"></div>
        <div className="-left-4 top-1.5 w-3 h-3 bg-white rounded-full -mb-5 -mx-8"></div>
        <p className="font-semibold">AIR FLOW X</p>
        <p className="text-white/70">$129</p>
      </div>

      {/* Feature Label 2 */}
      <div className="absolute bottom-[28%] left-[22%] text-sm max-w-[150px] font-inter">
        <div className="absolute -right-8 top-1.5 w-8 h-[2px] bg-white/60"></div>
        <div className="w-3 h-3 bg-white rounded-full mb-2"></div>
        <p className="text-white/80">
          A lightweight neo runner designed for speed.
        </p>
      </div>

      {/* Right Scroll Indicator */}
      <div className="absolute right-10 h-[100px] w-[2px] bg-white/60">
        <div className="h-[30px] bg-white w-full"></div>
      </div>
    </section>
  );
}
