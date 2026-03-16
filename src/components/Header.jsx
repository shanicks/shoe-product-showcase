import { Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
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
        <div className="flex gap-5 text-white/90">
          <Search size={20} className="cursor-pointer hover:text-white" />
          <ShoppingCart size={20} className="cursor-pointer hover:text-white" />
          <User size={20} className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </header>
  );
}
