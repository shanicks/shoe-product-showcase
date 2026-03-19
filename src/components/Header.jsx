import { Search, ShoppingCart, Menu, User, Bell } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest font-bebas flex items-center">
          KIXORA
          <span className="ml-1 w-2 h-2 bg-sky-500 rounded-full  translate-y-[3px]"></span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-sm tracking-wide text-white/90 font-inter cursor-pointer">
          <a className="hover:text-white transition">Home</a>
          <a className="hover:text-white transition">Brands</a>
          <a className="hover:text-white transition">Men</a>
          <a className="hover:text-white transition">Women</a>
          <a className="hover:text-white transition">About us</a>
        </nav>

        {/* Icons */}
        <div className="flex gap-12 md:gap-5 text-white/90">
          <Search size={20} className="cursor-pointer hover:text-white" />
          <ShoppingCart size={20} className="cursor-pointer hover:text-white" />
          <User
            size={20}
            className="hidden md:block cursor-pointer hover:text-white"
          />
          {/* <Menu
            size={20}
            className="md:hidden cursor-pointer hover:text-white bg-black"
          /> */}
          <Sheet>
            {/* Trigger Button */}
            <SheetTrigger asChild>
              <button className="text-white flex items-center justify-center">
                <Menu
                  size={20}
                  className="md:hidden cursor-pointer hover:text-white"
                />
              </button>
            </SheetTrigger>

            {/* Drawer */}
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[280px] h-[75vh] top-[45%] -translate-y-1/2  right-4 rounded-2xl bg-white/10 backdrop-blur-1xl border-r border-white/20 text-white p-6relativeoverflow-hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                      <User size={18} />
                    </div>
                    <span className="text-sm font-medium">User Name</span>
                  </div>
                  <Bell size={18} className="text-white/70" />
                </div>

                {/* Divider */}
                <div className="my-4 h-[1px] bg-white/20" />

                {/* Categories */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 underline">
                    Categories
                  </h3>
                  <div className="flex flex-col gap-3 text-white/80 ml-15">
                    <a className="hover:text-white transition">New Arrivals</a>
                    <a className="hover:text-white transition">Trending</a>
                    <a className="hover:text-white transition">Men</a>
                    <a className="hover:text-white transition">Women</a>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-4 h-[1px] bg-white/20" />

                {/* Information */}
                <div>
                  <h3 className="text-sm font-semibold mb-3 underline">
                    Information
                  </h3>
                  <div className="flex flex-col gap-3 text-white/80 ml-15">
                    <a className="hover:text-white transition">About Us</a>
                    <a className="hover:text-white transition">Help</a>
                    <a className="hover:text-white transition">Contact Us</a>
                    <a className="hover:text-white transition">My Orders</a>
                    <a className="hover:text-white transition">
                      Terms & Conditions
                    </a>
                    <a className="hover:text-white transition">
                      Returns & Exchanges
                    </a>
                  </div>
                </div>

                {/* Bottom Spacer */}
                <div className="mt-auto" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="fixed z-20 right-4 md:right-10 top-1/2 -translate-y-1/2 h-[80px] w-[2px] bg-white/40 overflow-hidden">
        <motion.div
          style={{ scaleY }}
          className="origin-top w-full h-full bg-white"
        />
      </div>
    </header>
  );
}
