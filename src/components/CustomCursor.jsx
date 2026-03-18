import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    // Detect screen width
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1024); // >= 1024px = lg
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // do nothing on mobile/tablet
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      // Hide cursor on buttons, links, inputs, textareas, or anything with cursor pointer
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "P" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "H5" ||
        target.tagName === "H6" ||
        target.tagName === "MOTION.BUTTON" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isDesktop]);
  if (!isDesktop) return null; // hide cursor on tablet/mobile
  return (
    // <div
    //   className={`fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[9999] transition-all duration-150 ${
    //     hidden ? "opacity-0" : "opacity-100"
    //   }`}
    //   style={{
    //     transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
    //     background: "rgba(255, 255, 255, 0.06)",
    //     backdropFilter: "blur(3px)",
    //     border: "1px solid rgba(255,255,255,0.3)",
    //   }}
    // />
    <div
      className={`fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[9999] transition-opacity duration-150 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
      {/* Main glass layer */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
        radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%),
        rgba(255,255,255,0.05)
      `,
          backdropFilter: "blur(14px) saturate(180%)",
          WebkitBackdropFilter: "blur(14px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.35)",
          boxShadow: `
        0 4px 30px rgba(0,0,0,0.25),
        inset 0 1px 10px rgba(255,255,255,0.35)
      `,
        }}
      />

      {/* 🔴 Red dispersion */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,0,0,0.15), transparent 70%)",
          mixBlendMode: "screen",
          transform: "translate(1px, 0)",
          pointerEvents: "none",
        }}
      />

      {/* 🔵 Blue dispersion */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,255,0.15), transparent 70%)",
          mixBlendMode: "screen",
          transform: "translate(-1px, 0)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
