"use client";

import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { scrolled } = useScroll();
  const translateY = scrolled ? "-20px" : "0";
  const scale = scrolled ? 1.05 : 1;

  return (
    <motion.div
      className="relative bg-gradient-to-r from-primary to-secondary min-h-[80vh] md:min-h-[90vh] bg-cover bg-center"
      style={{ transform: `translateY(${translateY})` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, scale }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden"
    >
      {/* Decorative background pulse */}
      <motion.div
        className="absolute inset-0 bg-primary/10 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 py-16 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Rumah Sunat Modern Jati
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pelayanan kesehatan modern dengan pendekatan ramah, canggih, dan terpercaya.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:justify-start md:gap-6">
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow hover:shadow-lg transition-shadow"
            aria-label="Booking via WhatsApp"
          >
            <MessageCircle className="w-5 h-5 mr-2" aria-hidden />
            <span className="text-lg font-medium">Booking WhatsApp</span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/70 text-primary font-medium px-6 py-3 rounded-lg transition-colors hover:border-primary"
            aria-label="Lihat Layanan"
            onClick={() => window.location.href = "/layanan"}
          >
            Lihat Layanan
          </motion.button>
        </div>

        {/* Illustration placeholder */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}