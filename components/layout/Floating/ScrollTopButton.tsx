"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { Z_INDEX } from "@/constants/design";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

type ScrollTopButtonProps = {
  className?: string;
  /** Scroll distance before the button appears */
  threshold?: number;
};

export function ScrollTopButton({
  className,
  threshold = 400,
}: ScrollTopButtonProps) {
  const visible = useScrolled(threshold);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          key="scroll-top"
          aria-label="Kembali ke atas"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ zIndex: Z_INDEX.toast }}
          className={cn(
            "fixed right-4 bottom-22 inline-flex size-11 items-center justify-center rounded-full",
            "border border-border bg-surface text-foreground shadow-md sm:right-6 sm:bottom-24",
            "transition-colors hover:bg-muted",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
            className,
          )}
        >
          <ArrowUp className="size-5" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
