import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedShoes from "./components/FeaturedShoes";
import ProductDetail from "./components/ProductDetail";
import CustomCusor from "./components/CustomCursor";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import { useRef } from "react";
import ReviewsAndFAQ from "./components/ReviewFAQ";
import LoginScreen from "./components/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const nextSectionRef = useRef(null);
  return (
    <>
      {/* <CustomCusor /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/"
            element={
              <div className="min-h-screen w-full bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] text-white overflow-hidden">
                <Header />
                <div
                  className="
                    fixed top-0 left-0
                    text-white 
                    text-[280px] sm:text-[260px]
                    sm:translate-y-[30%] sm:translate-x-[28%]
                    translate-y-[10%] -translate-x-[3%]
                    font-bebas font-bold
                    opacity-[0.03]
                    pointer-events-none
                    select-none
                    z-10
                  "
                  style={{ letterSpacing: "55px" }}
                >
                  KIXORA
                </div>
                <Hero nextSectionRef={nextSectionRef} />
                <FeaturedShoes ref={nextSectionRef} />
                <WhyChooseUs />
                <ProductDetail />
                <ReviewsAndFAQ />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
