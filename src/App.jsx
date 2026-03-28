import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedShoes from "./components/FeaturedShoes";
import ProductDetail from "./components/ProductDetail";
import CustomCusor from "./components/CustomCursor";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import { useRef } from "react";
import ReviewsAndFAQ from "./components/ReviewFAQ";

export default function App() {
  const nextSectionRef = useRef(null);
  return (
    <>
      <CustomCusor />
      <div className="min-h-screen w-full bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] text-white overflow-hidden">
        <Header />
        <Hero nextSectionRef={nextSectionRef} />
        <FeaturedShoes ref={nextSectionRef} />
        <WhyChooseUs />
        <ProductDetail />
        <ReviewsAndFAQ />
        <Footer />
      </div>
    </>
  );
}
