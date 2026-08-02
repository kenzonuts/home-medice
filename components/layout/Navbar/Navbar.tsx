"use client";

import { Menu } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { DesktopNav } from "@/components/layout/Navbar/DesktopNav";
import { MobileNav } from "@/components/layout/Navbar/MobileNav";
import { Logo } from "@/components/layout/Logo";
import { Z_INDEX } from "@/constants/design";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled(12);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const openMobile = useCallback(() => setMobileOpen(true), []);
  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 0);
  }, []);

  return (
    <>
      <motion.header
        role="banner"
        style={{ zIndex: Z_INDEX.sticky }}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "sticky top-0 w-full transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300",
          scrolled
            ? "border-b border-border/80 bg-surface/90 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
          <Logo className="min-w-0" />

          <DesktopNav />

          <button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-lg text-foreground lg:hidden",
              "transition-colors hover:bg-muted",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            )}
            aria-label="Buka menu navigasi"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={openMobile}
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </Container>
      </motion.header>

      <div id="mobile-navigation">
        <MobileNav open={mobileOpen} onClose={closeMobile} />
      </div>
    </>
  );
}
