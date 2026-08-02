"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef } from "react";

import { Logo } from "@/components/layout/Logo";
import { NavLink } from "@/components/layout/Navbar/NavLink";
import { getWhatsAppUrl } from "@/constants/contact";
import { NAV_CTA, NAV_ITEMS } from "@/constants/navigation";
import { Z_INDEX } from "@/constants/design";
import { useLockedBody } from "@/hooks/use-locked-body";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useLockedBody(open);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-foreground/40 backdrop-blur-[2px] lg:hidden"
            style={{ zIndex: Z_INDEX.overlay }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />

          <motion.aside
            ref={drawerRef}
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              "fixed inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-surface shadow-xl lg:hidden",
            )}
            style={{ zIndex: Z_INDEX.modal }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <p id={titleId} className="sr-only">
                Menu navigasi
              </p>
              <Logo compact onClick={onClose} />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Tutup menu"
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-lg text-foreground",
                  "transition-colors hover:bg-muted",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                )}
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <nav
              aria-label="Navigasi mobile"
              className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25 }}
                >
                  <NavLink
                    href={item.href}
                    onNavigate={onClose}
                    className="w-full justify-start px-3 py-3 text-base"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="border-t border-border p-4">
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className={cn(
                  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg",
                  "bg-primary text-sm font-medium text-primary-foreground shadow-sm",
                  "transition-colors hover:bg-primary-hover",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                )}
              >
                <MessageCircle className="size-4" aria-hidden />
                {NAV_CTA.label}
              </Link>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
