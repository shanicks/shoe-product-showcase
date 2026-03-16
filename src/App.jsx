import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedShoes from "./components/FeaturedShoes";
import BestSellers from "./components/BestSellers";
import ProductDetail from "./components/ProductDetail";
import Customizer from "./components/Customizer";
import CustomCusor from "./components/CustomCursor";
import { useRef } from "react";

export default function App() {
  const nextSectionRef = useRef(null);
  return (
    <>
      <CustomCusor />
      <div className="min-h-screen w-full bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] text-white overflow-hidden">
        <Header />
        <Hero nextSectionRef={nextSectionRef} />
        <FeaturedShoes ref={nextSectionRef} />
        <BestSellers />
        <ProductDetail />
        <Customizer />
      </div>
    </>
  );
}
