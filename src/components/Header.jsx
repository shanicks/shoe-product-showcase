import { Search, ShoppingCart, Menu, User, Bell } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ isLogged }) {
  // isLogged = true;
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
          <span className="ml-1 w-2 h-2 bg-sky-500 rounded-full translate-y-[3px]"></span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-sm tracking-wide text-white/90 font-inter cursor-pointer">
          <a className="hover:text-white transition">Home</a>
          <a className="hover:text-white transition">Product</a>
          <a className="hover:text-white transition">Customize</a>
          <a className="hover:text-white transition">About us</a>
        </nav>

        {/* Icons */}
        <div className="flex gap-6 items-center text-white/90">
          <Bell size={20} className="cursor-pointer hover:text-white" />
          <ShoppingCart size={20} className="cursor-pointer hover:text-white" />

          {/* Desktop User Dropdown */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <User
                    size={20}
                    className="cursor-pointer hover:text-white mt-1.5"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-lg"
              >
                {isLogged ? (
                  <>
                    <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10">
                      My Orders
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10">
                      Returns & Exchanges
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-white/10 focus:bg-white/10">
                      Logout
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-violet-600 hover:to-orange-400 hover:text-white">
                    Login
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu size={20} className="cursor-pointer hover:text-white" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-fit h-fit top-[25%] -translate-y-1/2 right-6 rounded-xl bg-white/10 backdrop-blur-lg shadow border border-white/20 text-white"
            >
              <div className="flex flex-col h-full">
                {/* User Section */}
                <div className="flex items-center gap-3">
                  {isLogged ? (
                    <>
                      <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
                        <User size={18} />
                      </div>
                      <span className="text-sm font-medium">User Name</span>
                    </>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer hover:bg-white/20 transition text-gray-800"
                    >
                      Signup/Login
                    </Button>
                  )}
                </div>

                {/* Divider */}
                <div className="my-4 h-[1px] bg-white/20" />

                {/* Navigation */}
                <div className="flex flex-col gap-3 text-white/80">
                  <a className="hover:text-white transition">Product</a>
                  <a className="hover:text-white transition">Customize</a>
                  <a className="hover:text-white transition">About Us</a>
                  <a className="hover:text-white transition">FAQ</a>
                  <a className="hover:text-white transition">Contact</a>
                </div>

                {/* Divider */}
                <div className="my-4 h-[1px] bg-white/20" />

                {/* Logged In Options */}
                {isLogged && (
                  <div className="flex flex-col gap-3 text-white/80">
                    <a className="hover:text-white transition">My Orders</a>
                    <a className="hover:text-white transition">Logout</a>
                  </div>
                )}
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
