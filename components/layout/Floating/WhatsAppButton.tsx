"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { Z_INDEX } from "@/constants/design";
import { getWhatsAppUrl } from "@/constants/contact";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  className?: string;
};

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Booking melalui WhatsApp"
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      style={{ zIndex: Z_INDEX.toast }}
      className={cn(
        "group fixed right-4 bottom-5 inline-flex size-14 items-center justify-center rounded-full sm:right-6 sm:bottom-6",
        "bg-primary text-primary-foreground shadow-lg shadow-primary/25",
        "transition-colors hover:bg-primary-hover active:bg-primary-active",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-primary/30 motion-safe:animate-ping"
      />
      <span className="relative inline-flex size-full items-center justify-center rounded-full">
        <MessageCircle
          className="size-6 transition-transform duration-200 group-hover:scale-110"
          aria-hidden
        />
      </span>
    </motion.a>
  );
}
