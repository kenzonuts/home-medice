"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";

type FooterBackToTopProps = {
  className?: string;
};

export function FooterBackToTop({ className }: FooterBackToTopProps) {
  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md text-xs font-medium text-white/70",
        "transition-colors hover:text-white",
        "focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none",
        className,
      )}
    >
      <ArrowUp className="size-3.5" aria-hidden />
      Kembali ke atas
    </motion.button>
  );
}
