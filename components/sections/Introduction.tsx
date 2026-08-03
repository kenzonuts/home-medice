"use client";

import { motion } from "framer-motion";
import { useScroll } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export default function Introduction() {
  const { scrolled } = useScroll();
  const translateY = scrolled ? "-20px" : "0";

  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image placeholder */}
          <motion.div
            className="w-full md:w-1/2 bg-gray-200 rounded-lg h-64 flex items-center justify-center animate-pulse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-1/2">
              <div className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-center text-gray-400">
                Clinic Image Placeholder
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="w-full md:w-1/2 p-8">
            <motion.h2
              className="text-2xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Rumah Sunat Modern Jati
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Kami adalah pusat kesehatan modern yang menyediakan layanan medis berkualitas dengan pendekatan ramah, canggih, dan terpercaya.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow hover:shadow-lg transition-shadow"
              aria-label="Booking via WhatsApp"
              onClick={() => window.location.href = "https://wa.me/1234567890"}
            >
              <MessageCircle className="size-5 mr-2" aria-hidden />
              <span className="text-lg font-medium">Booking WhatsApp</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}