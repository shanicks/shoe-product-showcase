import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star } from "lucide-react";

// -------- REVIEWS DATA --------
const reviews = [
  {
    name: "Aarav Mehta",
    text: "Didn’t expect this level of comfort. Wore them all day — no fatigue at all.",
  },
  {
    name: "Riya Sharma",
    text: "The custom colors are insane. I literally get compliments every time I wear them.",
  },
  {
    name: "Kabir Singh",
    text: "Clean design + premium feel. Easily competes with big brands.",
  },
];

// -------- FAQ DATA --------
const faqs = [
  {
    q: "How do I choose the right size?",
    a: "We recommend going true to size. You can also refer to our detailed size guide before ordering.",
  },
  {
    q: "Can I return custom sneakers?",
    a: "Custom pairs are made just for you, so returns are limited. However, we do offer exchanges for size issues.",
  },
  {
    q: "How long does delivery take?",
    a: "Standard orders arrive within 5–7 days. Custom orders may take slightly longer.",
  },
  {
    q: "Are these suitable for daily wear?",
    a: "Yes. They’re designed for all-day comfort and durability.",
  },
];

export default function ReviewsAndFAQ() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-[#2a0d05] via-[#3b1408] to-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* -------- REVIEWS -------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Loved by Early Wearers
          </h2>
          <p className="mt-4 text-white/70">
            Real feedback from people who tried the drop.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition">
                <CardContent className="p-6 space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-sm text-white/80 leading-relaxed">
                    {review.text}
                  </p>

                  <p className="text-sm font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* -------- FAQ -------- */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Got Questions?</h2>
            <p className="mt-4 text-white/70">
              Everything you need to know before you cop.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mt-12"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white/5 border border-white/10 rounded-xl px-4"
                >
                  <AccordionTrigger className="text-left text-white">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-transform">
            Get Your Pair →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
