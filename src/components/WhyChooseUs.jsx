import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Footprints,
  ShieldCheck,
  Link,
  RefreshCw,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Your Style. Your Colors.",
    desc: "Design your own pair with custom color combinations.",
  },
  {
    icon: Footprints,
    title: "Comfort That Keeps Up",
    desc: "Cushioned for long days, every day.",
  },
  {
    icon: ShieldCheck,
    title: "Made to Last",
    desc: "Durable materials and solid construction.",
  },
  {
    icon: Link,
    title: "Goes With Everything",
    desc: "Clean design that fits every outfit.",
  },
  {
    icon: RefreshCw,
    title: "Risk-Free Try",
    desc: "Easy returns and exchanges.",
  },
  {
    icon: Zap,
    title: "Designed for Speed",
    desc: "A lightweight runner engineered for performance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#6B2E0F] via-[#3A1608] to-[#000000] text-white font-inter">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight font-bebas"
        >
          WHY YOU’LL LOVE THESE SNEAKERS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 text-muted-foreground text-lg"
        >
          Discover the Kixora difference - meticulously crafted for you.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-inherit border border-white text-white">
                  <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                    <Icon className="w-8 h-8 text-white" />
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12"
        >
          <Button className="px-8 py-6 text-lg rounded-full bg-gradient-to-r  from-orange-500 to-red-500 text-white shadow-lg hover:scale-105 transition-transform">
            Design Your Pair ↓
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
