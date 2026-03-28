import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-16 bg-gradient-to-r from-[#2a0d05] via-[#5a1f0a] to-[#2a0d05] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-2xl font-bold tracking-wider font-bebas flex items-center">
            KIXORA
            <span className="ml-1 w-2 h-2 bg-sky-500 rounded-full  translate-y-[3px]"></span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            We are a team of designers and developers that create high quality
            Sneakers for everyday comfort and speed
          </p>

          <div className="text-sm text-white/70 space-y-1">
            <p>123 Widget Street</p>
            <p>Acmeville, AC 12345</p>
          </div>

          <div className="text-sm text-white/70 space-y-1">
            <p>hello@kixora.co</p>
            <p>+1-512-758-7588</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4 md:col-span-1">
          <h3 className="font-semibold">Join Our Newsletter</h3>
          <p className="text-sm text-white/70">
            Subscribe today for free and save 10% on your first purchase.
          </p>

          <div className="flex gap-2">
            <Input
              placeholder="Enter Your Email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button className="bg-white text-black hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>New Arrivals</li>
            <li>Featured</li>
            <li>Catalog</li>
            <li>Popular Brands</li>
            <li>Trending</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>My Orders</li>
            <li>Terms & Conditions</li>
            <li>Returns & Exchanges</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 text-xs text-white/50 text-center">
        Copyright © 2024 Kixora. All Rights Reserved.
      </div>
    </footer>
  );
}
