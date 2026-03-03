import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ColorSelector from "./ColorSelector";

export default function ProductInfo({ accent, selectedColor, setColor }) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4">
        <h2 className="text-4xl font-bold">$134</h2>
        <Badge>Exclusive</Badge>
      </div>

      <h3 className="text-3xl font-semibold">Jordan Jumpman 2021 PF</h3>

      <p className="text-white/70 max-w-md">
        Inspired by the design of the latest Air Jordan game shoe, the Jordan
        Jumpman 2021 helps up-and-coming players level up their game with
        responsive comfort and bold style.
      </p>

      <ColorSelector selectedColor={selectedColor} setColor={setColor} />

      <div className="flex gap-4 pt-4">
        <Button className={`${accent}`}>Add to Cart</Button>

        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black"
        >
          Buy Now
        </Button>
      </div>
    </motion.div>
  );
}
