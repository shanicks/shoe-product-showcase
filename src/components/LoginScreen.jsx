import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2a0d05] via-black to-[#2a0d05] px-4">
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
      >
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bebas tracking-widest text-white">
            KIXORA
            <span className="ml-1 w-2 h-2 bg-sky-500 inline-block rounded-full"></span>
          </h1>
          <p className="text-white/60 text-sm mt-2">Not For Standing Still</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <Input
            placeholder="Email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-0"
          />
          <Input
            type="password"
            placeholder="Password"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-0"
          />

          {/* CTA */}
          <Button className="w-full py-6 text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-800 via-violet-600 to-purple-500 text-white shadow-[0_10px_40px_rgba(124,58,237,0.5)] hover:scale-105 hover:shadow-[0_15px_50px_rgba(124,58,237,0.7)] transition-all duration-300">
            Login
          </Button>
        </div>

        {/* Extra Links */}
        <div className="mt-6 text-center text-sm text-white/60">
          <p className="hover:text-white cursor-pointer transition">
            Forgot Password?
          </p>
          <p className="mt-2">
            Don’t have an account?{" "}
            <span className="text-white hover:underline cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
