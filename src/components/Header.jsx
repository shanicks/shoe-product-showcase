import { Search, ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-widest">JORDAN</div>

        <nav className="hidden md:flex gap-8 text-sm tracking-wider">
          <a href="#">HOME</a>
          <a href="#">MAN</a>
          <a href="#">WOMAN</a>
          <a href="#">KIDS</a>
          <a href="#">SALE</a>
        </nav>

        <div className="flex gap-4">
          <Search size={20} />
          <ShoppingCart size={20} />
          <User size={20} />
        </div>
      </div>
    </header>
  );
}
